install:
	npm install --only=prod
install-all:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .