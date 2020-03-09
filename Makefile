all: assets/home.css

assets/home.css: assets/home.less assets/layout.less
	lessc assets/home.less assets/home.css
