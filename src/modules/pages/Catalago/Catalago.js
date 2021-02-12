import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { 
  Container, 
  PriceContainer, 
  Product, 
  ProductButton, 
  ProductButtonText,
  ProductContainer, 
  ProductImage, 
  ProductList, 
  ProductPrice, 
  ProductTitle 
} from './styles';
//import { formatCurrency } from '../../utils/format';

const Catalago = () => {
  const [stateList, setStateList] = useState([
    {
      id: 1,
      product: 'Tenis Nike',
      price: 'R$ 150.00',
      //price: 150,
      img_url: 'https://images.lojanike.com.br/1024x1024/produto/184919_1665748_20190909154845.png',
    },
    {
      id: 2,
      product: 'Tenis Nike',
      price: 'R$ 250.00',
      //price: 150,
      img_url: 'https://assets.xtechcommerce.com/uploads/images/medium/a57f1dbd7b73d6e66cff6c59eb307d55.png',
    },
    {
      id: 3,
      product: 'Tenis Adidas',
      price: 'R$ 350.00',
      //price: 150,
      img_url: 'https://cdnv2.moovin.com.br/rainhacalcados/imagens/produtos/det/tenis-masculino-adidas-runfalcon-d986d6369e9e9e39c995ff7338eacf4b.png',
    }
  ]);

  
  
  return (
    <Container>
        <ProductContainer>
          <ProductList 
            data={stateList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Product>
                <ProductImage source={{ uri: item.img_url }} />
                <ProductTitle>
                  {item.product}
                </ProductTitle>
                <PriceContainer>
                  <ProductPrice>
                    {/* {formatCurrency(item.price)} */}
                    {item.price}
                  </ProductPrice>
                  <ProductButton onPress={() => {}} >
                    <ProductButtonText>
                      adicionar
                    </ProductButtonText>
                    <Feather name="shopping-cart" size={18} color="white" />
                  </ProductButton>
                </PriceContainer>
              </Product>
            )}
          />
        </ProductContainer>
    </Container>
  );
}

export default Catalago;