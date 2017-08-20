module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: true,
			},
			js: {
				files: ['src/*.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				},
			},
			livereload: {
				// reload page when css, js, images or php files changed
				files: ['src/*.js'],
			},
		},

		uglify: {
			options: {
        compress: false,
				banner: '/*!\n<%= pkg.name %>.min.js <%= grunt.template.today("yyyy-mm-dd") %>\n'
					+'version: <%= pkg.version %> */'
			},
      build: {
        src: ['src/*.js'],
        dest: 'dist/<%= pkg.name %>.min.js',
      }
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask( 'default', ['watch'] );
};