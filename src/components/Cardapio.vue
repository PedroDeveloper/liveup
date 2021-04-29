<template>
<v-app>
    <v-card class="overflow-hidden"
    height="700"
    >

        <v-app-bar
            color="white"
            elevate-on-scroll
            dense
        >
         <v-app-bar-nav-icon class=" mt-10 hidden-sm-and-up"  @click.stop = "drawer =!drawer" ></v-app-bar-nav-icon>
            <v-navigation-drawer v-model="drawer"
            absolute
            temporary
            height="auto"
            width="300"
            > 
            <v-app-bar  height="60px" color="rgb(250, 2, 60)">
                <v-col>
                    <v-row justify="end">
                            <v-btn class="mt-1" depressed small color="white" @click="drawer=false"> 
                                <v-icon right>mdi-arrow-left</v-icon>
                            </v-btn>
                     </v-row>
                        <span class="pa-5 back"> Tá com fome do quê?</span>

                </v-col>
            </v-app-bar>
                <v-list-item class="titleRefeicoes mt-4 ml-5 mb-4">Refeições congeladas</v-list-item>
             </v-navigation-drawer>

        </v-app-bar>       
    
    </v-card>



</v-app>
</template>

<script>
export default {
    name:'Cardapio',

    data: () =>({
        
        drawer: false,

    }),
}
   
</script>

<style scoped>

.back {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
}
.titleRefeicoes{

    color:black;
    font-weight: bolder;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

</style>
