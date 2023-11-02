import { Box, Flex, IconButton, Image, AlertIcon } from '@chakra-ui/react';
import { useState } from 'react';

export default function Navigation(){
    const [isOpen, setIsOpen] = useState(false)


   const MenuButton = () => {
        return (
          <IconButton
            icon={<AlertIcon />}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          />
        );
      };

    return (
        <Box display={isOpen? 'block': 'none'}  position="fixed" top="0" left="0" width="100%" height="100%" zIndex="10">
            <Flex justifyContent="space-between" alignItems="center" padding="4">
            <Image src="/logo.png" alt="Logo" />
            <MenuButton />
        </Flex>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </Box>
    )
}