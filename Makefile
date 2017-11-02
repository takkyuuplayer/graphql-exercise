.PHONY: setup node_modules test run run-test

setup: node_modules

node_modules:
	yarn install
	yarn upgrade

test:
	yarn run test

run:
	@cd docker && $(MAKE) run
run-test:
	@cd docker && $(MAKE) run-test
