// pipeline {
//     agent any
 
//     environment {
//         CI = 'true'
//     }
 
//     stages {
//         stage('Checkout Code') {
//             steps {
//                 git 'https://github.com/JasonDsouza-10P/PLAYWRIGHT2025.git'
//             }
//         }
 
//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm install'
//             }
//         }
 
//         stage('Run Playwright Tests') {
//             steps {
//                 sh 'npx playwright install'  // Install browsers
//                 sh 'npx playwright test'    // Run Playwright tests
//             }
//         }
 
//         stage('Archive Test Reports') {
//             steps {
//                 archiveArtifacts artifacts: 'test-results/**', fingerprint: true
//             }
//         }
//     }
 
//     post {
//         always {
//             junit 'test-results/**/*.xml'  // Publish test results
//         }
//     }
// }



pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build App'
            }
        }
        stage('Test') {
            steps {
                echo 'Test App'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy App'
            }
        }
    }
}
