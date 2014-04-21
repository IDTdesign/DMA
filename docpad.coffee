# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# ...
	templateData:
		site:
			# The default title of our website
			title: "DMA"

			# The website's styles
			styles: [
				'/vendor/normalize.css'
				'/vendor/h5bp.css'
				'/css/bettertext.css'
				'/css/github.css'
				'/css/caniuse.css'
				'/css/template.css'
			]

			# The website's scripts
			scripts: [
				'/vendor/log.js'
				'/js/offscreenmenu.js'
				'/vendor/jquery.sticky.js'
				'/vendor/caniuse.js'
				'/js/script.js'
			]
		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} / #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title
	plugins:
		cleanurls:
			static: true
}

# Export the DocPad Configuration
module.exports = docpadConfig