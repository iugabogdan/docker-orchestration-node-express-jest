# Orchestrates the containers, starts the application and then triggers the tests
# after the tests are finished, the containers will be stopped.
start_application_and_execute_tests:
	docker-compose -f docker/docker-compose.yml up --exit-code-from test-executor --build application test-executor