<template>
  <div class="products">
    <div class="products__banner" data-aos="fade-down" data-aos-duration="1000">
      <CarouselImage :slides="imageGallery" :autoplay="false">
        <template v-slot><img class="paw-icon" src="/about-us/pawprints.png" alt="" /></template>
      </CarouselImage>
    </div>
    <div class="products__categories" id="recomendations">
      <div
        :class="['items', activeCategories == item.key ? 'active' : '']"
        v-for="(item, index) in categories"
        :key="index"
        @click="selectCategories(item.key)"
      >
        <div><img :src="item.icon" alt="" /></div>
        <div>
          <div class="font-bold text-xl">{{ item.label }}</div>
          <div>{{ item.total }}</div>
        </div>
      </div>
    </div>
    <div class="products__recommendations">
      <div class="heading-2 text-left mb-2 ml-7">Products Recomendations </div>
      <CarouselProduct :data="recoProduct" :key="refreshProduct" />
    </div>
    <div class="products__list-product">
      <div class="heading-2 text-left mb-2">All Items Products</div>
      <div class="filter-top text-left">
        <InputText
          class="input-search"
          id="search-input"
          placeholder="Search items"
          v-model="searchQuery"
        />
        <div class="text-sm"
          >Menampilkan Produk <b>“{{ activeCategories }}”</b> dari
          {{ filteredProducts.length }} product</div
        >
      </div>
      <div class="list">
        <div class="left-filter">
          <div class="price-filter">
            <div class="text-sm font-semibold mb-4">Harga</div>
            <InputText
              class="min-price mb-4"
              id="min-price-input"
              placeholder="Minimum harga"
              v-model="minPrice"
            />
            <InputText
              class="max-price"
              id="max-price-input"
              placeholder="Maximum harga"
              v-model="maxPrice"
            />
          </div>
          <div class="category-filter">
            <div class="text-sm font-semibold mb-4">Kategori Hewan</div>
            <div class="checkbox" v-for="(item, index) in animalCategory" :key="index">
              <Checkbox :value="item.label.toLocaleLowerCase()" @onChange="filterCategory" />
              <label class="text-sm" :for="item.id">{{ item.label }}</label>
            </div>
          </div>
          <div class="rating-filter">
            <div class="text-sm font-semibold mb-4">Rating</div>
            <div class="checkbox">
              <Checkbox value="" :checked="filterByRating" @onChange="filterRating" />
              <label class="text-sm" for="rating">4 keatas</label>
            </div>
          </div>
        </div>
        <div class="right-content">
          <div class="products-wrapper">
            <ProductCard v-for="(item, index) in filteredProducts" :key="index" :product="item" />
          </div>
          <div class="mt-8">
            <PaginationSection
              :current-page="currentPage"
              :total-pages="Math.ceil(productsItem.length / 20)"
              @update:current-page="updateCurrentPage"
            /> </div
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselImage from "@/components/CarouselImage/index.vue";
import InputText from "@/components/InputText";
import ProductCard from "@/components/CardProduct";
import CarouselProduct from "@/components/CarouselProduct";
import PaginationSection from "@/components/Pagination";
import Checkbox from "@/components/Checkbox";
export default {
  name: "ProductPage",
  components: {
    CarouselImage,
    InputText,
    ProductCard,
    CarouselProduct,
    PaginationSection,
    Checkbox,
  },
  data() {
    return {
      dataLoaded: false,
      activeCategories: "all",
      refreshProduct: 0,
      productsItem: [],
      currentPage: 1,
      productCategories: 0,
      imageGallery: [
        {
          title: "High quality product for your pet",
          subtitle: "",
          img: "/products/banner_1.png",
        },
        {
          title: "High quality product for your pet",
          subtitle: "",
          img: "/products/banner_2.png",
        },
        {
          title: "High quality product for your pet",
          subtitle: "",
          img: "/products/banner_3.png",
        },
      ],
      categories: [
        {
          label: "All Items",
          key: "all",
          total: "327 items",
          icon: "/icons/animated/pawprint.gif",
        },
        {
          label: "Food",
          key: "food",
          total: "150 items",
          icon: "/icons/animated/dog-food.gif",
        },
        {
          label: "Costume",
          key: "costume",
          total: "35 items",
          icon: "/icons/animated/regional-costume.gif",
        },
        {
          label: "Accessories",
          key: "acc",
          total: "52 items",
          icon: "/icons/animated/cat-toy.gif",
        },
        {
          label: "Health Care",
          key: "healthcare",
          total: "40 items",
          icon: "/icons/animated/veterinary-2.gif",
        },
        {
          label: "Others",
          key: "others",
          total: "50 items",
          icon: "/icons/animated/pet-shop.gif",
        },
      ],
      recoProduct: [],
      product: {
        all: [
          {
            "slides": [
              {
                "label": "Meo Treat",
                "key": "all",
                "img": "/products/list/food/product_8.webp",
                "price": 300000,
              },
              {
                "key": "all",
                "label": "Equil brio",
                "img": "/products/list/food/food-1.jpeg.webp",
                "price": 150000,
              },
              {
                "key": "all",
                "label": "Meo dry food",
                "img": "/products/list/food/food2.webp",
                "price": 70000,
              },
              {
                "key": "all",
                "label": "Felibites",
                "img": "/products/list/food/food5.webp",
                "price": 50000,
              },
              {
                "key": "all",
                "label": "Salmon Bolt",
                "img": "/products/list/food/food7.jpg",
                "price": 30000,
              },
            ],
          },
          {
            "slides": [
              {
                "label": "Royal Canin",
                "img": "/products/list/food/product_8.webp",
                "price": 258000,
              },
              {
                "label": "Royal Canin",
                "img": "/products/list/food/food-1.jpeg.webp",
                "price": 300000,
              },
            ],
          },
        ],
        food: [
          {
            "slides": [
              {
                "key": "food",
                "label": "Meo Treat Snack",
                "img": "/products/list/food/food-1.jpeg.webp",
                "price": 25000,
                "category": "kucing",
                "rating": true,
              },
              {
                "key": "food",
                "label": "Equilbrio Cat Food - 2KG",
                "img": "/products/list/food/food2.webp",
                "price": 2000000,
                "category": "kucing",
              },
              {
                "key": "food",
                "label": "Meo Dry Food",
                "img": "/products/list/food/food4.jpg",
                "category": "anjing",
                "price": 25000,
                "rating": true,
              },
              {
                "key": "food",
                "label": "Felibites Dry food 500 Gr",
                "img": "/products/list/food/food5.webp",
                "price": 20000,
                "category": "kucing",
              },
              {
                "key": "food",
                "label": "Bolt Salmon Dry Food 1KG",
                "img": "/products/list/food/food6.jpg",
                "price": 20000,
                "category": "kucing",
              },
            ],
          },
        ],
        costume: [
          {
            "slides": [
              {
                "key": "costume",
                "label": "Dino Green Costume Cat",
                "img": "/products/list/costume/costume-1.jpeg",
                "category": "kucing",
                "rating": true,
                "price": 700000,
              },
              {
                "key": "costume",
                "label": "Strip Cat T-shirt",
                "img": "/products/list/costume/costume-2.png",
                "category": "kucing",
                "price": 30000,
              },
              {
                "key": "costume",
                "label": "Female Cat Costume",
                "img": "/products/list/costume/costume-3.jpg",
                "category": "kucing",
                "rating": true,
                "price": 100000,
              },
              {
                "key": "costume",
                "label": "Kaos Kucing lucu",
                "img": "/products/list/costume/costume-4.webp",
                "price": 20000,
                "category": "anjing",
              },
            ],
          },
        ],
        acc: [
          {
            "slides": [
              {
                "key": "acc",
                "label": "Fountain Water CatDog",
                "img": "/products/list/accessories/acc-1.jpeg",
                "category": "anjing",
                "price": 300000,
              },
              {
                "key": "acc",
                "label": "pet bowl twin",
                "img": "/products/list/accessories/acc-2.jpg",
                "price": 50000,
                "category": "kelinci",
              },
              {
                "key": "acc",
                "label": "Kalung kucing random",
                "img": "/products/list/accessories/acc-3.png",
                "price": 30000,
                "rating": true,
                "category": "anjing",
              },
              {
                "key": "acc",
                "label": "Set pet food and fontain water",
                "img": "/products/list/accessories/acc-4.png",
                "category": "anjing",
                "price": 200000,
              },
              {
                "key": "acc",
                "label": "Stainlestell pet bowl",
                "img": "/products/list/accessories/acc-5.jpg",
                "category": "kucing",
                "price": 100000,
              },
            ],
          },
          {
            "slides": [
              {
                "key": "acc",
                "label": "Cat collar",
                "img": "/products/list/accessories/acc-6.webp",
                "price": 50000,
              },
              {
                "key": "acc",
                "label": "Apple air tag",
                "img": "/products/list/accessories/acc-7.jpeg",
                "price": 650000,
                "category": "kucing",
              },
              {
                "key": "acc",
                "label": "Glass pet bowl",
                "img": "/products/list/accessories/acc-8.jpg",
                "price": 100000,
              },
            ],
          },
        ],
        healthcare: [
          {
            "slides": [
              {
                "key": "healthcare",
                "label": "Cat and Dog Multivitamin",
                "img": "/products/list/health/healt-1.jpg",
                "price": 150000,
                "category": "anjing",
              },
              {
                "key": "healthcare",
                "label": "Food nutrition",
                "img": "/products/list/health/health-2.jpg",
                "price": 300000,
                "category": "kucing",
                "rating": true,
              },
              {
                "key": "healthcare",
                "label": "Obat Cacing kucing",
                "img": "/products/list/health/health-3.webp",
                "price": 250000,
                "category": "kucing",
              },
              {
                "key": "healthcare",
                "label": "Penambah napsu makan hewan",
                "img": "/products/list/health/health-4.jpeg",
                "price": 100000,
                "category": "kelinic",
                "rating": true,
              },
            ],
          },
        ],
        others: [
          {
            "slides": [
              {
                "key": "others",
                "label": "Kadang pink ukuran sedang",
                "img": "/products/list/other/other-1.webp",
                "price": 3000000,
                "category": "anjing",
              },
              {
                "key": "others",
                "label": "Pet Carier",
                "img": "/products/list/other/other-2.jpeg",
                "price": 300000,
                "category": "kucing",
                "rating": true,
              },
              {
                "key": "others",
                "label": "White tree house",
                "img": "/products/list/other/other-3.webp",
                "price": 500000,
                "category": "kucing",
                "rating": true,
              },
              {
                "key": "others",
                "label": "Pet Carier",
                "img": "/products/list/other/other-4.jpg",
                "price": 350000,
                "category": "kelinci",
              },
              {
                "key": "others",
                "label": "Tree House big",
                "img": "/products/list/other/other-5.webp",
                "price": 1000000,
                "category": "kucing",
              },
            ],
          },
          {
            "slides": [
              {
                "key": "others",
                "label": "Treehouse ",
                "img": "/products/list/other/other-6.webp",
                "price": 1500000,
                "category": "kucing",
              },
              {
                "key": "others",
                "label": "Blue pet cargo",
                "img": "/products/list/other/other-7.jpg",
                "price": 150000,
                "category": "anjing",
              },
              {
                "key": "others",
                "label": "Cat Cage Brown",
                "img": "/products/list/other/other-8.jpg",
                "price": 250000,
                "category": "kucing",
              },
            ],
          },
        ],
      },
      animalCategory: [
        {
          id: "kucing",
          label: "Kucing",
        },
        {
          id: "anjing",
          label: "Anjing",
        },
        {
          id: "burung",
          label: "Burung",
        },
        {
          id: "ikan",
          label: "Ikan",
        },
        {
          id: "kelinci",
          label: "Kelinci",
        },
      ],
      searchQuery: "",
      minPrice: "",
      maxPrice: "",
      selectedCategory: [],
      filterByRating: false,
    };
  },
  created() {
    this.recoProduct = this.product.all;
    this.productsItem = Object.keys(this.product).flatMap((category) => {
      return this.product[category].flatMap((item) => item.slides);
    });
  },
  computed: {
    filteredProducts() {
      let filteredProduct = this.productsItem;
      filteredProduct = this.filterProductItems(filteredProduct);
      const startIndex = (this.currentPage - 1) * 20;
      const endIndex = startIndex + 20;
      return filteredProduct.slice(startIndex, endIndex);
    },
  },
  methods: {
    filterProductItems(filteredProduct) {
      // Filter by name
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        filteredProduct = filteredProduct.filter((product) =>
          product.label.toLowerCase().includes(search)
        );
      }

      // Filter by price range
      if (this.minPrice || this.maxPrice) {
        filteredProduct = filteredProduct.filter((product) => {
          const price = product.price || 0;
          const min = parseFloat(this.minPrice) || 0;
          const max = parseFloat(this.maxPrice) || Number.POSITIVE_INFINITY;
          return price >= min && price <= max;
        });
      }

      // // Filter by category
      if (this.selectedCategory.length != 0) {
        filteredProduct = filteredProduct.filter((product) =>
          this.selectedCategory.includes(product.category)
        );
      }

      // Filter by rating
      if (this.filterByRating) {
        filteredProduct = filteredProduct.filter((product) => product.rating);
      }

      return filteredProduct;
    },
    filterCategory(isChecked, selectedValue) {
      if (isChecked && !this.selectedCategory.includes(selectedValue)) {
        this.selectedCategory.push(selectedValue);
      } else {
        this.selectedCategory = this.selectedCategory.filter((value) => value !== selectedValue);
      }
    },
    filterRating(isChecked) {
      this.filterByRating = isChecked;
    },
    selectCategories(key) {
      this.activeCategories = key;
      this.recoProduct = [];
      this.recoProduct = this.product[key];
      this.refreshProduct++;
      this.scrollToElement();
    },
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
    },
    scrollToElement() {
      const element = document.getElementById("recomendations");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
