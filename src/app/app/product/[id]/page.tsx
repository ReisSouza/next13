import React from 'react'
type IProductProps = {
  params: {
    id: string
  }
}

export const generateMetadata = async ({ params }) => {
  return {
    title: `Product ${params.id}`,
    description: 'Description for page product',
  }
}
const Product: React.FC<IProductProps> = ({ params }: IProductProps) => {
  return <div>Product {params.id}</div>
}

export default Product
