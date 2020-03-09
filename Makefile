all: assets/home.css assets/unflagged.css

assets/home.css: assets/home.less assets/layout.less
	lessc assets/home.less assets/home.css

assets/unflagged.css: assets/unflagged.less assets/layout.less
	lessc assets/unflagged.less assets/unflagged.css