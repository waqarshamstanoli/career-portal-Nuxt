<template>
  <div>
    <v-form v-model="validStep" class="login" @submit.prevent="">
      <v-card-text class="pl-0">
        <v-row>
          <v-col cols="12" lg="8" md="12" sm="12">
            <v-row>
              <v-col cols="12" lg="6" md="12" sm="12" class="px-md-8">
                <label class="text--h6 black--text font-weight-medium"
                  >Product Category <span class="red--text">*</span></label
                >
                <v-select
                  outlined
                  rounded
                  placeholder="Select Category"
                  class="mt-3 mb-3"
                  :items="categories"
                  v-model="productsData.category_id"
                  item-text="name"
                  item-value="id"
                  :rules="requiredRules"
                >
                </v-select>
                <label
                  class="text--h6 black--text font-weight-medium"
                  for="dffsfd"
                  >Product Subcategory <span class="red--text">*</span>
                </label>
                <v-select
                  outlined
                  rounded
                  :items="subCategories"
                  item-text="name"
                  item-value="id"
                  :rules="requiredRules"
                  placeholder="Select Subcategory"
                  class="mt-3 mb-3"
                >
                </v-select>
                <label
                  class="text--h6 black--text font-weight-medium"
                  for="dffsfd"
                  >Product Name <span class="red--text">*</span></label
                >
                <TextField
                  outlined
                  rounded
                  :placeHolder="`Product Name`"
                  :counterValue="`35`"
                  class="mt-3 mb-3"
                  :modelValue="productsData.name"
                  @input="(newValue) => (productsData.name = newValue)"
                  :rules="requiredRules"
                >
                </TextField>
                <label
                  class="text--h6 black--text font-weight-medium"
                  for="dffsfd"
                  >Product Description <span class="red--text">*</span></label
                >
                <v-textarea
                  outlined
                  rounded
                  auto-grow
                  counter="200"
                  height="164"
                  v-model="productsData.description"
                  :rules="requiredRules"
                  label="Describe this product"
                  class="mt-3 mb-3"
                >
                </v-textarea>
                <v-row>
                  <v-col lg="6" md="12" sm="12" class="padding">
                    <label
                      class="text--h6 black--text font-weight-medium"
                      for="dffsfd"
                      >Price <span class="red--text">*</span></label
                    >
                    <NumberField
                      outlined
                      rounded
                      :placeholderText="`19.99`"
                      :rules="requiredRules"
                      class="mt-3 mb-3"
                      :modelValue="productsData.price"
                      @input="(newValue) => (productsData.price = newValue)"
                    >
                    </NumberField>
                  </v-col>
                  <v-col lg="6" md="12" sm="12" class="padding">
                    <label
                      class="text--h6 black--text font-weight-medium mt-16"
                      for="dffsfd"
                      >Sale Price <span class="red--text">*</span></label
                    >
                    <NumberField
                      outlined
                      rounded
                      :placeholderText="`19.99`"
                      class="mt-3 mb-3"
                      :modelValue="productsData.sale_price"
                      @input="
                        (newValue) => (productsData.sale_price = newValue)
                      "
                      :rules="requiredRules"
                    >
                    </NumberField>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" lg="6" class="px-md-8">
                <div class="fileInput mb-6">
                  <img src="../assets/Paper Upload.svg" alt="" />
                  <div class="body-1">Drop product thumbnail here</div>
                  <div class="subtitle-2 secondary--text font-weight-regular">
                    or
                  </div>
                  <div class="file-input">
                    <input
                      type="file"
                      id="file"
                      ref="image"
                      class="file"
                      @change="setFile()"
                    />
                    <label
                      for="file"
                      class="text-capitalize mx-auto amber--text text--accent-3 mt-2 mb-4 px-8 py-6"
                    >
                      Browse files
                      <p class="file-name"></p>
                    </label>
                  </div>

                  <div
                    class="subtitle-2 pb-2 secondary--text font-weight-regular"
                  >
                    Maximum upload file size: 2 MB
                  </div>
                </div>
                <label
                  class="text--h6 black--text font-weight-medium"
                  for="dffsfd"
                  >Tags <span class="red--text">*</span></label
                >
                <v-combobox
                  v-model="productsData.tags"
                  placeholder="Add a tag then hit enter..."
                  chips
                  multiple
                  outlined
                  rounded
                  dense
                  class="mt-3 mb-3"
                  append-icon=""
                  :rules="requiredRules"
                >
                  <template
                    v-slot:selection="{ attrs, item, select, selected }"
                  >
                    <v-chip
                      small
                      v-bind="attrs"
                      :input-value="selected"
                      close
                      @click="select"
                      @click:close="removeChip(item)"
                    >
                      {{ item }}
                    </v-chip>
                  </template>
                </v-combobox>
                <label
                  class="text--h6 black--text font-weight-medium"
                  for="dffsfd"
                  >Product URL <span class="red--text">*</span></label
                >
                <TextField
                  outlined
                  rounded
                  :labelName="`Enter the product URL`"
                  class="mt-3 mb-3"
                  :modelValue="productsUrl"
                      @input="
                        (newValue) => (productsUrl = newValue)
                      "
                  :rules="requiredRules"
                >
                </TextField>
                <label
                  class="text--h6 black--text font-weight-medium"
                  for="dffsfd"
                  >Ideal Gift Recipient</label
                >
                <v-select
                  outlined
                  rounded
                  :items="idealGIftReceipent"
                  item-text="name"
                  item-value="id"
                  :rules="requiredRules"
                  placeholder="Select Recipient"
                  class="mt-3 mb-3"
                >
                </v-select>
                <v-card-actions>
                  <v-btn
                    large
                    type="submit"
                    :disabled="!validStep"
                    color="#FBBF23"
                    class="text-capitalize hoverEffect ml-auto px-8 py-2 mt-10"
                    @click="addProduct"
                  >
                    Continue
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </div>
</template>
<script>
import TextField from "./TextField.vue";
import NumberField from "./NumberField.vue";
import { mapActions, mapGetters } from "vuex";
import { indexOf } from "lodash";

export default {
  props: ["categories", "productsData", "imagefile"],
  components: { TextField, NumberField },
  data() {
    return {
      name: "waqar",
      picture: "",
      base64Img: "",
      productsUrl:'https://i-need-retail-therapy.com/',
      file: "",
      validStep: false,
      requiredRules: [(v) => (!!v && v != undefined ? true : "Required !")],
      subCategories: [
        {
          name: "waqar",
          id: "1",
        },
      ],
      idealGIftReceipent: [
        {
          name: "waqar",
          id: "1",
        },
      ],
      productsData: {
        category_id: "",
        price: "",
        name: "",
        tags: "",
        description: "",
        sale_price: "",
      },
    };
  },
  methods: {
    ...mapActions([
      "get_products",
      "get_categories",
      "add_product",
      "imagefile",
    ]),
    emitData(component) {
      this.$emit("changeComponent", component);
      // this.$emit("callAPI", component);
    },
    setFile() {
      this.file = this.$refs.image.files[0];
      console.log(this.file);
      this.imagefile = this.$refs.image.files[0];
      //   this.encodeImage(this.file);
      //   var form_data = new FormData();
      // form_data.append('file', this.file);
      //   this.productsData.thumbnail = form_data;
    },
    encodeImage(input) {
      if (input) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // this.productsData.thumbnail = e.target.result;
        };
        reader.readAsDataURL(input);
        this.productsData.thumbnail = reader;
      }
    },
    removeChip(item) {
      let index = this.productsData.tags.indexOf(item);
      this.productsData.tags.splice(index, 1);
    },
    addProduct() {
      const formData = new FormData();

      formData.append("category_id", this.productsData.category_id);
      formData.append("description", this.productsData.description);
      formData.append("name", this.productsData.name);
      formData.append("price", this.productsData.price);
      formData.append("sale_price", this.productsData.sale_price);
      formData.append("tags", this.productsData.tags);
      formData.append("thumbnail", this.file);

      this.add_product(formData)
        .then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
              this.emitData("productCheckoutForm");
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
    imagefile() {
      return this.file;
    },
  },
};
</script>
<style scoped>
.padding {
  padding-top: 140px;
}
.file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.file-input label {
  display: block;
  position: relative;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  background: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fbbf23 !important;
  letter-spacing: 0rem;
  font-size: 14px !important;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}
.file-input label:hover {
  background: #5c5c5c;
}

.file-name {
  position: absolute;
  bottom: -35px;
  left: 10px;
  font-size: 0.875rem !important;
  color: #fbbf23 !important;
}

/* input:hover + label,
input:focus + label {
  transform: scale(1.02);
} */

/* Adding an outline to the label on focus */
input:focus + label {
  outline: 1px solid #000;
  outline: -webkit-focus-ring-color auto 2px;
}
</style>
