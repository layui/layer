module.exports = function(grunt) {  

  // Project configuration.  
  grunt.initConfig({  
    pkg: grunt.file.readJSON('package.json'),
    
    //压缩js - layer
    uglify: {  
      options: {
        expand: true
      },
      'layer.js': {
        options: {
           banner: '/*! layer-v<%= pkg.version %> <%= pkg.description %> License LGPL  <%= pkg.homepage %> By <%= pkg.author %> */\n;'
        },
        src: './src/layer.js',  
        dest: './layer.js'
      },
      'layer.mobile.js': {
        options: {
           banner: '/*! layer mobile-v<%= pkg.mobile %> <%= pkg.description %>移动版 License LGPL <%= pkg.homepage %>mobile By <%= pkg.author %> */\n;'
        },
        src: './src/mobile/layer.js',  
        dest: './mobile/layer.js'
      }
    },

    //压缩css
    cssmin: {
      options : { 
        compatibility : 'ie8', //设置兼容模式 
        noAdvanced : true //取消高级特性 
      }
      ,layer: {
        files: [{
          expand: true,
          cwd: './src/skin',
          src: ['*.css', '!*.min.css'],
          dest: './skin'
        }, {
          expand: true,
          cwd: './src/mobile/need',
          src: ['*.css', '!*.min.css'],
          dest: './mobile/need'
        }]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['uglify', 'cssmin']);

  
};  