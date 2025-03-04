module.exports = function (grunt) {

    // Configura as tarefas do Grunt
    grunt.initConfig({

        // Compilação do LESS para CSS
        less: {
            development: {
                files: {
                    'src/css/styles.css': 'src/less/styles.less'  // Caminho de saída e o arquivo LESS
                }
            }
        },

        // Minificação de arquivos JavaScript
        uglify: {
            build: {
                src: 'src/js/script.js',    // Arquivo JS de origem
                dest: 'src/js/script.min.js' // Arquivo JS comprimido de destino
            }
        },

        // Tarefa para observar mudanças nos arquivos e rodar tarefas automaticamente
        watch: {
            styles: {
                files: ['less/**/*.less'], // Observar arquivos LESS
                tasks: ['less'], // Tarefa que será executada quando houver mudanças
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: ['js/**/*.js'], // Observar arquivos JS
                tasks: ['uglify'], // Tarefa que será executada quando houver mudanças
                options: {
                    nospawn: true
                }
            }
        }

    });

    // Carrega os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Registra as tarefas padrão
    grunt.registerTask('default', ['less', 'uglify', 'watch']);

};
