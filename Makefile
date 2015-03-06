BIN=./node_modules/.bin/
ESLINT=$(BIN)/eslint
MOCHA=$(BIN)/mocha

watch:
	@watch -n1 --color $(MOCHA) -c

all: lint test

lint:
	@./node_modules/.bin/eslint .

test:
	@$(MOCHA)

debug: start-node-inspector open-chrome test-debug stop-node-inspector
test-debug:
	-$(MOCHA) -C --debug-brk

open-chrome:
	@open -a Google\ Chrome http://127.0.0.1:8080/debug?port=5858

start-node-inspector: node-inspector.pid
stop-node-inspector: node-inspector.pid
	@kill `cat $<` && rm $<

node-inspector.pid:
	@./node_modules/.bin/node-inspector & echo $$! > $@

.PHONY: watch all lint test debug test-debug open-chrome start-node-inspector stop-node-inspector
