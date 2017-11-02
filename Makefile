.PHONY: test run run-test

test:
	yarn run test

run:
	@cd docker && $(MAKE) run
run-test:
	@cd docker && $(MAKE) run-test
