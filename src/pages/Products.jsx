import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Products = () => {
  return (
    <div className="space-y-8">
      {/* Products Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Product 1</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Product 1" className="mx-auto object-cover w-full h-[150px]" />
              <p>Brief description of Product 1.</p>
              <Button variant="outline" className="mt-2">Buy Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product 2</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Product 2" className="mx-auto object-cover w-full h-[150px]" />
              <p>Brief description of Product 2.</p>
              <Button variant="outline" className="mt-2">Buy Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product 3</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Product 3" className="mx-auto object-cover w-full h-[150px]" />
              <p>Brief description of Product 3.</p>
              <Button variant="outline" className="mt-2">Buy Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product 4</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Product 4" className="mx-auto object-cover w-full h-[150px]" />
              <p>Brief description of Product 4.</p>
              <Button variant="outline" className="mt-2">Buy Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Service 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Service 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Service 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Service 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Service 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Service 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Review from customer 1."</p>
              <div className="flex space-x-1 mt-2">
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Review from customer 2."</p>
              <div className="flex space-x-1 mt-2">
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Review from customer 3."</p>
              <div className="flex space-x-1 mt-2">
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
                <Star className="text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Products;