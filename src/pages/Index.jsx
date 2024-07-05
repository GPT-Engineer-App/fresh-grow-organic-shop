import React from "react";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Carousel>
          <Carousel.Item>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Welcome Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Fresh Grow</h1>
        <p className="text-lg">Your one-stop shop for organic agricultural products.</p>
      </section>

      {/* Photos Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
      </section>

      {/* Product Previews Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border p-4 space-y-2">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p>Brief description of Product 1.</p>
          </div>
          <div className="border p-4 space-y-2">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
            <h3 className="text-xl font-semibold">Product 2</h3>
            <p>Brief description of Product 2.</p>
          </div>
          <div className="border p-4 space-y-2">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
            <h3 className="text-xl font-semibold">Product 3</h3>
            <p>Brief description of Product 3.</p>
          </div>
          <div className="border p-4 space-y-2">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[150px]" />
            <h3 className="text-xl font-semibold">Product 4</h3>
            <p>Brief description of Product 4.</p>
          </div>
        </div>
        <div className="text-center">
          <Button variant="outline">See More</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;