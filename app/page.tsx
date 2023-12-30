"use client"

import Image from "next/image";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { ChangeEvent, useState } from "react";

export default function Component() {
  const [imageSrc, setImageSrc] = useState<string>('/placeholder.svg?height=128&width=128');
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      setError(null);

      if (file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (typeof e.target?.result === 'string') {
            setImageSrc(e.target.result);
          }
        };
        reader.readAsDataURL(file);
      } else {
        setError('Please upload a valid image.');
      }
    }
  };

  return (
    <main className="flex flex-col p-2 items-center justify-center min-h-screen bg-gray-900">
      <Card className="max-w-md mx-auto bg-gray-900 rounded-xl overflow-hidden">
        <CardContent className="p-8">
        <div className="relative w-full" style={{ height: '30vh' }}>
            <Image
              src={imageSrc}
              alt="Avatar"
              fill
              objectFit="contain"
            />
          </div>
          <div className="mt-6 text-center">
            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
              <Label className="text-white" htmlFor="picture">
                Upload Image
              </Label>
              <Input
                className="border-transparent focus:ring-2 focus:ring-orange-300 rounded-md text-white bg-orange-500 hover:bg-orange-700"
                id="picture"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}