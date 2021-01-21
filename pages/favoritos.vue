<template>
  <div class="container">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <div class="flex flex-col lg:flex-row md:justify-between md:items-end">
            <div class="flex flex-col items-start text-left mb-4">
                <Title text="Favoritos"/>
                <Subtitle text="Seus personagens e comics favoritos aqui"/>
            </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
                <div v-for="category in categories" :key="category.index" class="my-2">
                    <Subtitle :text="category.title"/>
                    <div v-if="category && category.list.length">
                        <clickable v-for="item in category.list" :key="item.index" :link="item.link">
                            {{item.title}}
                        </clickable>
                    </div>
                    <div v-else>
                        Você ainda não possui {{category.title}} salvos
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            categories: [
                {
                    title: "COMICS",
                    call: "comics",
                    list:[]
                },
                {
                    title: "PERSONAGENS",
                    call: "characters",
                    list:[]
                }
            ],
            breadcrumbs: [{
                name: "Favoritos",
                link: "/favoritos"
            }]
        }
    },
    async mounted() {
         try {
            // fetches the list of favorites items
            //must call token because this happens before it is setted in the store
            const token = sessionStorage.getItem("token")
            
            let favorites = await this.$axios.$get(`${this.$config.host}/users/favorites`,{
                headers: { authorization: token}
            });
            favorites = favorites.map((i)=>{
                if (i.category === "comics") {
                    i.link = `/comics/${i.marvelid}`
                    this.categories[0].list.push(i)
                }
                if (i.category === "characters") {
                    i.link = `/personagens/${i.marvelid}`
                    this.categories[1].list.push(i)
                }
                return i;
            })
        } catch(e) {
            console.log(e);
        }
    }
    

}
</script>

<style>

</style>