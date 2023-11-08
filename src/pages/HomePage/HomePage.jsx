import React from 'react'
import { Container, ContainerBestSellers, ContainerGrid } from './styled'
import TrintaOff from "../../assets/img/30off.png"
import { api } from "../../api/api";
import Product from '../../components/Product/Product';

const HomePage = () => {
    const [json, setJson] = React.useState([]);

    function randomProducts() {
        for (let i = 0; i < 2; i++) {
            let pValue = Math.floor(Math.random() * 69);
            api.get(`produtos/${pValue}`).then((r) => setJson((p) => [...p, r.data]))
        }
    }

    React.useEffect(() => {
        randomProducts()
    }, []);

    return (
        <Container>
            <img src={TrintaOff} alt="" />
            <ContainerBestSellers>
                <h3>Mais Vendidos</h3>
                <ContainerGrid>
                    {json && json.map((p) => {
                        return (
                            <>
                                <Product product={p} />
                            </>
                        );
                    })}
                </ContainerGrid>
            </ContainerBestSellers>
        </Container>
    )
}

export default HomePage