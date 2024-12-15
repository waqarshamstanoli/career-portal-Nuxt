import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#FBBF23',
            secondary: '#9EA2B1',
            accent: '#8c9eff',
            error: '#b71c1c',
            green:'#34C759',
            red:'#FF3B30',
            blue:'#0A84FF', 
            girlFriend:'#FF2D55',
            purple:'#BF5AF2',
            forGrad:'#32D74B'    
            
          },
        },
      },
});
