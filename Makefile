REPORTER = spec
MOCHA_OPTS = --check-leaks --colors ./tests

test: lint
	@./node_modules/.bin/mocha -b \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS)
	@echo "All ok"
lint:
	./node_modules/.bin/jshint ./lib ./index.js
