import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Settings } from 'lucide-react';
// import { Label } from '@/components/ui/label';
// import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
// import {type convergeOptions} from '@/game/types';

const StartGame = () => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  return (
    <Card className='mt-4 md:w-xl sm:w-md w-sm h-[16rem] flex flex-col justify-evenly items-center'>
      <Button className='w-max'>Level Select</Button>
      <div className='flex flex-row align-baseline'>
        <Button className='w-max z-[1]'>Quick Play</Button>
        <Button
          onClick={() => {
            setOpenOptions((prev) => !prev);
          }}
          className='w-max z-[2]'>
          <Settings />
        </Button>
      </div>
      <Card className='px-4' hidden={!openOptions}>
        hi I'm options
      </Card>
    </Card>
  );
};
export default StartGame;
