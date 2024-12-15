<template>
  <v-container fluid class="px-8">
    <v-row>
      <v-col cols="12" lg="11" class="pr-12">
        <v-card-title class="pl-0 pb-0 text--h4 primary--text font-weight-bold"
          >Submit a product</v-card-title
        >
        <v-card-title
          v-if="showComponent !== 'productSubmitted'"
          class="pl-0 mb-8 font-weight-bold"
        >
          Want to have your product reach an audience of over 1 million people
          looking for awesome stuff to buy? <br />
          Upload your product details to get your product featured today!
        </v-card-title>
      </v-col>
    </v-row>
    <Product-form
      v-if="showComponent === 'productForm'"
      :imagefile="imageFile"
      :categories="getAddedCategories"
      :productsData="addProductData"
      @changeComponent="changeComponent"
      @callAPI="addProduct"
    ></Product-form>
    <Product-checkout-form
      v-if="showComponent === 'productCheckoutForm'"
      @changeComponent="changeComponent"
    ></Product-checkout-form>
    <Product-submitted
      v-if="showComponent === 'productSubmitted'"
    ></Product-submitted>
  </v-container>
</template>
<script>
import ProductForm from "@/components/ProductForm.vue";
import ProductCheckoutForm from "@/components/ProductCheckoutForm.vue";
import ProductSubmitted from "@/components/ProductSubmitted.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ProductForm, ProductCheckoutForm, ProductSubmitted },
  data() {
    return {
      productForm: false,
      showComponent: "productForm",
      categoryName: "shoes",
      imageFile:'',
      addProductData: {
        category_id: "",
        name: "",
        description: "",
        price: "",
        sale_price: "",
        thumbnail: "",
        tags: "",
      },
    };
  },
  methods: {
    ...mapActions(["get_products", "get_categories", "add_product"]),
    changeComponent(component) {
      this.showComponent = component;
    },
    getProucts() {
      this.get_products()
        .then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
            // this.loading = false;
          }
        })
        .finally(() => {
          // this.$emit("overlay", false);
        });
    },
    getCategories() {
      this.get_categories(this.categoryName)
        .then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
            // this.loading = false;
          }
        })
        .finally(() => {
          // this.$emit("overlay", false);
        });
    },
    addProduct() {
     const formData= new FormData()
     formData.append ('category_id', this.addProductData.category_id)
     formData.append ('description', this.addProductData.description)
     formData.append ('name', this.addProductData.name)
     formData.append ('price', this.addProductData.price)
     formData.append ('sale_price', this.addProductData.sale_price)
     formData.append ('tags', this.addProductData.tags)
     formData.append ('thumbnail', this.addProductData.imageFile)
     
      this.add_product(formData)
        .then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
            // this.loading = false;
          }
        })
        .finally(() => {
          // this.$emit("overlay", false);
        });
    },
  },

  computed: {
    ...mapGetters(["getAddedCategories", "getAddedProducts"]),
  },
  mounted() {
    this.getCategories();
    this.getProucts();
  },
};
</script>
<style scoped></style>
