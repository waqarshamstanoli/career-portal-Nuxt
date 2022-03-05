import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - career-portal-new',
    title: 'career-portal-new',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/Ii8n.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'es','ar'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!',
              search: "Search",
  job_title: "Job Title",
  location: "Location",
  apply: "Apply",
  details: "Details",
  read_more: "Read More",
  share_job_on: "Share the job on",
  find_jobs: "Find Jobs",
  powered_by: "Powered By",
  job_details: "Job Details",
  negotiable: "Negotiable",
  back: "Back",
  f_name: "First Name",
  l_name: "Last Name",
  email: "Email",
  phone: "Phone",
  experience: "Experience",
  click_here: "Click Here",
  cover_letter: "Cover Letter",
  questions: "Questions",
  apply_before: "Apply Before",
  apply_now: "Apply Now",
  copy_text: "Copy link to clipboard",
  close: "Close",
  home: {
    search_position: "Search Position",
    search_placeholder: "Job, Title, Keyword or Company",
  },
  apply_job: {
    apply_for_job: "Apply for this job",
  },
            },
            ar:{
              search: "بحث",
              job_title: "لقب عنوان وظيفي",
              location: "موقع الوظيفة",
              apply: "تطبيق",
              details: "تفاصيل",
              read_more: "اقرأ أكثر",
              share_job_on: "شارك الوظيفة على",
              find_jobs: "العثور على وظائف",
              powered_by: "مشغل بواسطة",
              job_details: "تفاصيل الوظيفة",
              negotiable: "قابل للتفاوض",
              back: "خلف",
              f_name: "الاسم الأول",
              l_name: "الكنية",
              email: "بريد الالكتروني",
              phone: "هاتف",
              experience: "خبرة",
              click_here: "انقر لها",
              cover_letter: "غطاء الرسالة",
              questions: "أسئلة",
              apply_before: "تقدم قبل",
              apply_now: "تقدم قبل",
              copy_text: "قدم الآن",
              close: "قريب",
              home: {
                search_position: "موقف البحث",
                search_placeholder:
                  "الوظيفة أو المسمى الوظيفي أو الكلمة الرئيسية أو الشركة",
              },
              apply_job: {
                apply_for_job: "تقدم لهذه الوظيفة",
              },
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],

  

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#2e3f51",
        secondary: "#33aada",
        accent: "#2E3F51",
        error: "#EF4B35",
        info: "#90278F",
        success: "#4CAF50",
        warning: "#FFC107",
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
