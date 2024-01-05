<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { CardNormal } from "../components/cardNormal";
import { HorizontalCard } from "../components/horizontalCard";
import { VerticalCard } from "../components/verticalCard";
import { Search } from "@/components/ui/search";
import { Button } from "@/components/ui/button";
import { Grid3X3, GripHorizontal, Rows } from "lucide-react";
import { data } from "../data/data";
import { FilterInventory } from "@/components/FilterInventory";
=======
import React, { useEffect, useState } from 'react'
import { CardNormal } from '../components/cardNormal';
import { HorizontalCard } from '../components/horizontalCard';
import { VerticalCard } from '../components/verticalCard';
import { Search } from '@/components/ui/search';
import { Button } from '@/components/ui/button';
import { Filter, Grid3X3, GripHorizontal, Rows } from 'lucide-react';
import { data } from '../data/data';
>>>>>>> 9bf0fb9c7d83f2e480925665ea7528c33ca52770

export const Inventory = () => {
  const [activeType, setActiveType] = useState("normal");
  const [display, setDisplay] = useState("col");

<<<<<<< HEAD
  const showCardsOfType = (type: string) => {
    setActiveType(type);
  };
  useEffect(() => {
    switch (activeType) {
      case "normal":
        setDisplay("grid lg:grid-cols-auto-fit sm:grid-cols-2 gap-4");
        break;
      case "horizontal":
        setDisplay("grid lg:grid-cols-3 sm:grid-cols-1 gap-4");
        break;
      case "vertical":
        setDisplay("flex flex-col gap-4");
        break;
    }
  }, [activeType]);
  return (
    <>
      <div className="columns-3 my-4">
        <div className="flex-none">
          <Search icon={"Search"} />
        </div>
        <FilterInventory />
=======
    const [activeType, setActiveType] = useState('normal');
    const [display, setDisplay] = useState('col');
    const [style, setStyle] = useState('col');
    const showCardsOfType = (type: string) => {
        setActiveType(type)
    };
    useEffect(() => {
        switch (activeType) {
            case 'normal':
                setDisplay('grid lg:grid-cols-auto-fit sm:grid-cols-2 gap-4');
                break;
            case 'horizontal':
                setDisplay('grid lg:grid-cols-3 sm:grid-cols-1 gap-4');
                break;
            case 'vertical':
                setDisplay('flex flex-col gap-4');
                break;

        }
    },[activeType])
    const renderCards = () => {
        return data.map((product) => {
            switch (activeType) {
                case 'normal':
                    return (
                        <CardNormal
                            className="rounded-[20px]"
                            key={product.id}
                            product={product}
                        />
                    );
                case 'horizontal':
                    return (
                        <HorizontalCard
                            className="rounded-[20px]"
                            key={product.id}
                            product={product}
                        />
                    );
                case 'vertical':
                    return (
                        <VerticalCard
                            // Pasa las props necesarias al componente CardVertical
                            key={product.id}
                            product={product}
                        />
                    );
                default:
                    return null;
            }
        });
    };
    return (
      <>
            <div className="columns-3 my-4">
                <div className='flex-none'><Search  icon={'Search'} /></div>
                <Button className="button outlined ">Filter<Filter className='ml-2'></Filter></Button>
                <div className='button button-group flex flex-row-reverse'>
                    
                    <div dir="ltr">
                        <Button variant={"outline"}
                            onClick={() => showCardsOfType('vertical')}
                            className={`rounded-s-[0px] ${activeType === 'vertical' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                        ><Rows /></Button>
                    </div>
                    <Button variant={"outline"}
                        onClick={() => showCardsOfType('horizontal')}
                        className={`rounded-[0px] ${activeType === 'horizontal' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            }`}
                    ><GripHorizontal /></Button>
                    <div dir="rtl">
                        <Button variant={"outline"} onClick={() => showCardsOfType('normal')}
                            className={`rounded-s-[0px] ${activeType === 'normal' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}><Grid3X3 /></Button>
                    </div>
                    
                </div>
                
            </div>
            <div className={display}>{renderCards()}</div>
      </>
    
  )
}

>>>>>>> 9bf0fb9c7d83f2e480925665ea7528c33ca52770

        <div className="button button-group flex flex-row-reverse">
          <Button
            onClick={() => showCardsOfType("normal")}
            className={activeType === "normal" ? "bg-sky-300/30" : ""}
          >
            <GripHorizontal />
          </Button>
          <Button
            onClick={() => showCardsOfType("horizontal")}
            className={activeType === "horizontal" ? "bg-sky-500/30" : ""}
          >
            <Grid3X3 />
          </Button>
          <Button
            onClick={() => showCardsOfType("vertical")}
            className={activeType === "vertical" ? "bg-sky-500/30" : ""}
          >
            <Rows />
          </Button>
        </div>
      </div>
      <div className={display}>
        {data.map((product: { id: React.Key | null | undefined }) => {
          switch (activeType) {
            case "normal":
              return (
                <CardNormal
                  className={"rounded-[20px]"}
                  key={product.id}
                  product={product}
                />
              );
            case "horizontal":
              return (
                <HorizontalCard
                  key={product.id}
                  product={product}
                  className={"rounded-[20px]"}
                />
              );
            case "vertical":
              return <VerticalCard key={product.id} product={product} />;
            default:
              return null;
          }
        })}
      </div>
    </>
  );
};