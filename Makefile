# Docker Compose file
DOCKER_COMPOSE = docker-compose.yml

# Docker Compose command
DC = docker-compose -f $(DOCKER_COMPOSE)

NESTJSAPP = nestjs-server
NEXTJSAPP = nextjs-client


# Start the application
up:
	$(DC) up -d

# Start only the client side
client:
	$(DC) up -d $(NEXTJSAPP)

# Start the application without de-attach
attach:
	$(DC) up

# Stop the application
down:
	$(DC) down

# View logs
logs:
	$(DC) logs -f

# Clean up containers
clean:
	$(DC) down -v

# Test server
test-server:
	$(DC) exec $(NESTJSAPP) npm test

branch-name:
	@echo "Git Branch Name Schema: {feat/fix}/{app_type}/{workspace}-{specific-workspace}"
# Help
help:
	@echo "Available Targets:"
	@echo "  up           : Start the application"
	@echo "  attach       : Start the application without de-attach mode"
	@echo "  down         : Stop the application"
	@echo "  logs         : View logs"
	@echo "  clean        : Clean up containers and database"
	@echo "  client       : Start only the client side"
	@echo "  test-server  : Test server side"
	@echo "  branch-name  : Show branch name standard"
