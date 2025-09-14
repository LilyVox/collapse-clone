import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router';
import { Settings } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const StartGame = () => {
  const [colors, setColors] = useState([3]);
  const [height, setHeight] = useState([10]);
  const [width, setWidth] = useState([7]);
  return (
    <Card className='mt-4 md:w-xl sm:w-md w-sm h-[16rem] flex flex-col justify-evenly items-center'>
      <Button className='w-max'>Level Select</Button>
      <div className='flex flex-col'>
        <div className='flex flex-row align-baseline'>
          <Link to={`game/${colors[0]}/${width[0]}/${height[0]}`}>
            <Button className='w-max z-[1]'>Quick Play</Button>
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <Button className='z-[1]'>
                <Settings />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-80 text-main-foreground'>
              <div className='grid gap-4'>
                <div className='space-y-2'>
                  <h4 className='font-heading leading-none'>Settings</h4>
                  <p className='text-sm'>Set your custom game difficulty.</p>
                </div>
                <div className='grid gap-2'>
                  <div className='grid w-full gap-3'>
                    <div className='flex items-center justify-between gap-2'>
                      <Label htmlFor='widthSlider'>Width</Label>
                      <span className='text-foreground font-base text-sm'>{width[0]}</span>
                    </div>
                    <Slider
                      id='widthSlider'
                      value={width}
                      onValueChange={setWidth}
                      min={5}
                      max={12}
                      step={1}
                    />
                  </div>
                  <div className='grid w-full gap-3'>
                    <div className='flex items-center justify-between gap-2'>
                      <Label htmlFor='heightSlider'>Height</Label>
                      <span className='text-foreground font-base text-sm'>{height[0]}</span>
                    </div>
                    <Slider
                      id='heightSlider'
                      value={height}
                      onValueChange={setHeight}
                      min={6}
                      max={18}
                      step={1}
                    />
                  </div>
                  <div className='grid w-full gap-3'>
                    <div className='flex items-center justify-between gap-2'>
                      <Label htmlFor='colorSlider'>Colors</Label>
                      <span className='text-foreground font-base text-sm'>{colors[0]}</span>
                    </div>
                    <Slider
                      id='colorSlider'
                      value={colors}
                      onValueChange={setColors}
                      min={3}
                      max={5}
                      step={1}
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Card>
  );
};
export default StartGame;
