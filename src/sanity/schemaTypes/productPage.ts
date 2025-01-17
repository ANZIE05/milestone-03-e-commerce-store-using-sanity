import { defineField, defineType } from "sanity";

export const productPage = defineType({
    name: 'post',
    title: 'Products',
    type: 'document',
    fields: [
        defineField({
            name: 'ProductName',
            title: 'Product Name',
            type: 'string',
        }),
        defineField({
            name: 'ProductPrice',
            title: 'Product Price',
            type: 'string',
        }),
        defineField({
            name: 'ProductDescription',
            title: 'Product Description',
            type: 'string',
        }),
        defineField({
            name: 'ProductImage',
            title: 'Product Image',
            type: 'image',
        }),
    ],
});
