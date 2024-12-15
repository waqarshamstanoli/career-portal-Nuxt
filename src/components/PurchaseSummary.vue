<template>
    <v-card color="#F3F3F3" class="px-4">
            <v-card-text>
            <v-card-title class="pl-0 pb-0">Purchase Summary</v-card-title>
          <v-card-title class="pl-0"> <span class="text--h6">30 product submissions</span><v-spacer></v-spacer>  $90 /month </v-card-title>
          <div class="text--h6 mt-6 mb-12">Optional Marketing Add-ons <br>
<span class="mt-2">(Set a budget, and our team of experts will advertise your products on the channels you select) 

</span>
</div>
<div class="d-flex">
<v-checkbox
      v-model="checkbox"
      :label="`Facebook Ads:`"
    ></v-checkbox>
    <TextField :labelName="`Monthly Budget`" class="ml-8"></TextField>
  </div>
    <v-checkbox
      v-model="checkbox"
      :label="`Instagram Ads:`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox"
      :label="`Twitter Ads: `"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox"
      :label="`Google AdWords: `"
    ></v-checkbox>
    <v-card-title class="pl-0"><span class="text--h6">Sub total</span> <v-spacer></v-spacer>$190.00</v-card-title>
    <v-card-title class="pl-0"><span class="text--h6">Tax</span> <v-spacer></v-spacer>$11.40</v-card-title>
    <v-card-title class="pl-0"><span class="text--h6">Total</span> <v-spacer></v-spacer>$201.40</v-card-title>
</v-card-text>
        </v-card>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>