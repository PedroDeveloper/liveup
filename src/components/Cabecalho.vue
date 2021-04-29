<template>
<v-app id=inpire>
    <v-layout justify-center align-center>   
        <v-carousel hide-delimiter-background :show-arrows=false
            cycle
            height="580">
            <v-carousel-item v-for="(item,i) in items" :key='i' :src = 'item.src'>
                <v-container fill-height fluid pa-0 pb-16
                        >
                        <v-layout  align-top pb-3 mb-5>
                            <v-flex>
                            <div class="ma-3 text-center black--text">
                                <h1 class="textCenter"
                                style=" transition: opacity 200ms ease 0s;">
                                    Comer bem nunca foi tão fácil
                                </h1>
                            </div>

                            <div v-if="i==0" class="ma-2 text-center black--text">
                                <p color="white" class="subtitle">Da nossa tela, pronto pra guardar em casa. Conheça nosso Mercado e garanta a comida da semana.</p>
                                    <v-btn small color="success" class="bottom" :to='{path:"cardapio"}'>
                                        IR PARA O CARDARPIO
                                    </v-btn>
                            </div>

                             <div v-else-if="i==1" class="ma-3 text-center black--text">
                                <p color="white" class="subtitle">Reunimos nossos pratos mais vendidos para deixar sua escolha mais fácil e gostosa.</p>
                                    <v-btn small color="success" class="bottom">
                                        CONHEÇA OS MAIS VENDIDOS
                                    </v-btn>
                            </div>
                             <div v-else-if="i==2" class="ma-3 text-center black--text">
                                <p color="white" class="subtitle">Deixe a rotina mais gostosa a qualquer hora com lanches saudáveis e fáceis de preparar.</p>
                                    <v-btn small color="success" class="bottom">
                                        VER LANCHES
                                    </v-btn>
                            </div>
                            </v-flex>
                        </v-layout>
                </v-container>
            </v-carousel-item>
       </v-carousel>
    </v-layout>
<!---------------------------------------- FIM SLIDES  ---------------------------------------------->
<v-layout justify-center align-center>      
 <v-card  max-width="720" height="540" elevation="0" >
     <v-card-text>
        <v-container>
               <div class="ma text-center pag2Sub" >Com a gente é assim: </div>
               <p class=" mr-1 text-center pag2h2" >
                   Encheu o carrinho, programou a entrega, aqueceu e comeu. 
                        Comer bem nunca foi tão fácil
                </p>
            <div class="ma-3 text-center black--text">
                <v-btn small class="bottomCard">
                   IR PARA O CARDARPIO
                </v-btn>
            </div>
           
        </v-container>
     </v-card-text>
 </v-card>
</v-layout>

<!---------------------------------------- FIM CARD 2 ---------------------------------------------->

<v-layout justify-center align-center>
    <v-card  height="550" max-width="720"   color="#ffbc14" class="rounded-lg mx-5 " elevation="0">
        <v-container >
        <div class=" ma text-center mt-12 cardYellow">
            <p>Tá querendo pedir Liv Up e não sabe se entregamos na sua região?</p>
        </div>
        <div class="ma text-center ">
            <a class="geolocalizacao">Habilite a sua geolocalização</a> 
            <a class="subtitleCardYellow">ou informe seu CEP, que a gente verifica pra você!</a>
            
        
        <v-text-field hide-details class="rounded-lg mt-12 mb-4 px-9  mx-12" background-color="white"
        outlined
        label="CEP"
        append-icon="mdi-map-marker"
        >
        </v-text-field>
        
        <v-text-field  class="rounded-lg  px-9 mx-12" background-color="white" 
        outlined
        label="Endereço"
        append-icon="mdi-map-marker"
        >
        </v-text-field>
        <v-btn small class="rounded-lg" color="success">VERIFICAR</v-btn>
        </div>
        </v-container>
    </v-card>
</v-layout>
  <!---------------------------------------- FIM CARD 3 ---------------------------------------------->

<v-spacer class="mt-12"></v-spacer>

  <v-layout justify-center align-center  class="  d-lg-flex expansion1" >
          <v-card color="rgb(246, 243, 234)" height="400" width="720"  class=" mt-12 elevation-0 ">
          <v-expansion-panels  flat >
              <v-expansion-panel  >       
                  <v-expansion-panel-header  class="expansion1 ">
                    Venha conhencher
                    <template v-slot:actions>
                        <v-icon color="rgb(250, 156, 5)">$expand</v-icon>
                    </template>
                  </v-expansion-panel-header>
                      <v-divider class="mt-1"></v-divider>
              </v-expansion-panel>
        <!--------------------------------------------------------------------------------------------------------->          
              <v-expansion-panel>
                  <v-expansion-panel-header class="expansion1">
                    Seja parceiro
                    <template v-slot:actions>
                        <v-icon color="rgb(250,156,5)">$expand</v-icon>
                    </template>
                  </v-expansion-panel-header>
                    <v-divider class="mt-1"></v-divider>     
              </v-expansion-panel>   
        <!--------------------------------------------------------------------------------------------------------->
              <v-expansion-panel>
                <v-expansion-panel-header class="expansion1">
                    Fale conosco
                    <template v-slot:actions>
                        <v-icon color="rgb(250,156,5)">$expand</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-divider class="mt-1"></v-divider>
              </v-expansion-panel>
        <!--------------------------------------------------------------------------------------------------------->
            <v-expansion-panel>
                <v-expansion-panel-header class="expansion1">
                    Formas de pagamento
                    <template v-slot:actions>
                        <v-icon color="rgb(250,156,5)">$expand</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-divider class="mt-1"></v-divider>
            </v-expansion-panel>
        <!--------------------------------------------------------------------------------------------------------->
            <v-expansion-panel>
                <v-expansion-panel-header class="expansion1">
                    Redes sociais
                    <template v-slot:actions>
                        <v-icon color="rgb(250,156,5)">$expand</v-icon>
                    </template>
                </v-expansion-panel-header>
            </v-expansion-panel>
        <!--------------------------------------------------------------------------------------------------------->
         </v-expansion-panels>
        </v-card>
      </v-layout>


</v-app>
    
</template>

<script>
/* eslint-disable*/
export default {
    name:"Cabecalho",
  
    data:()=>({
    
     items:   
        [
            {
                src: require ('@/assets/img/slide1.jpg')
            },
            {
                src:require('@/assets/img/slide2.jpg')
            },
            {
                src: require ('@/assets/img/slide3.jpg')
            }
            
        ]


    })
}
</script>

<style scoped>

    .expansion1
    {
        background-color:rgb(246, 243, 234);
    }

    .textCenter 
    {
    color: rgb(255, 255, 255);
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    padding-top:12.5rem;
    line-height: 2.4rem;
    font-weight: bold;
    font-family: "Amsi Pro Normal", "Hind Madurai", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                            
    }

    .subtitle{
    color: rgb(255, 255, 255);
    text-align: center;
    padding-left:1.5rem;
    padding-right: 1.5rem;
    padding-top:3rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: bold;
    }
    .bottom{
    border-radius: 9px;
    font-family: "Hind Madurai", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 700;
    cursor: pointer;
    opacity: 0.98;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out 0s;
    padding: 1rem;
    width: auto;
    border: 2px solid rgb(0, 133, 62);
    }
    .bottomCard
    {
    position: relative;
    border-radius: 8px;
    font-family: "Hind Madurai", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    cursor: pointer;
    line-height: 1;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out 0s;
    width: auto;
    background-color: transparent;
    border: 2px solid rgb(0, 133, 62);
    }
    .pag2Sub
    {
        padding-top:8rem;
    }
    .pag2h2
    {
    padding-top: 1rem;
    color: rgb(22, 22, 22);
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    font-family: "Amsi Pro Normal", "Hind Madurai", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .cardYellow{
    color: rgb(93, 35, 24);
    padding-top: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 700;
    font-family: "Amsi Pro Normal", "Hind Madurai", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .geolocalizacao{
    color: rgb(93, 35, 24);
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 0.4rem;
    text-decoration: underline;
    background-color: transparent;
    border: none;
    font-size: 0.85rem;
    transition: color 300ms cubic-bezier(0.22, 1, 0.36, 1) 0s;
    font-weight: 700;
    }
     .subtitleCardYellow{
     padding-right: 2rem;
    color: rgb(93, 35, 24);
    cursor: pointer;
    font-size: 0.85rem;
    padding-top: 6rem;
    
    }

    
</style>
