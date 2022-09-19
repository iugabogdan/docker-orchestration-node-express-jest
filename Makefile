# Orchestrates the containers, starts the application and then triggers the tests,
# after the tests are finished, the containers will be stopped
trigger_remote_tests:
	docker-compose -f docker/docker-compose.yml up --exit-code-from test_executor --build application test_executor