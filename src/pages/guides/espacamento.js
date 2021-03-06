import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';

class Espacamento extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--25">ESPAÇAMENTOS</h3>
        <p className="sv-text-large">
          É indiscutível que um dos itens mais importantes para diferenciar um bom design de um ruim é o espaçamento
          entre os elementos que compõem o contexto geral do design em questão.
        </p>

        <p className="sv-text-large sv-mb--0">
          Uma abordagem detalhista, respeitando principalmente o "Espaço em Branco" e o "Respiro" entre os elementos da
          aplicação é fundamental. O espaçamento é o primeiro grau de separação entre setores de uma interface.
        </p>

        <h4 className="sv-fw-normal sv-ts-i sv-mt--40">Espaçamento vertical de texto</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>O Espaçamento entre os elementos que compõem o texto devem sempre ter uma hierarquia de espaços.</p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/es-txt-vertical.svg`} alt="Espaçamento vertical" />
          </SvCol>
        </SvRow>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--25">Espaçamento horizontal de texto</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              Seguindo o mesmo conceito de espaçamento vertical, separar com espaço os diferentes setores do texto é
              fundamental para boa legibilidade.
            </p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/es-txt-horizontal.svg`} alt="Espaçamento horizontal" />
          </SvCol>
        </SvRow>
        <h4 className="sv-fw-normal sv-ts-i sv-mt--25">Espaçamento entre elementos</h4>
        <hr />
        <SvRow>
          <SvCol>
            <p>
              É considerável a melhora de entendimento da interface quando temos um espaçamento consistente entre os
              elementos. Quando o espaçamento não é suficiente, a interface fica poluída e transmite sensação de
              bagunça.
            </p>
          </SvCol>
          <SvCol>
            <img src={`${process.env.PUBLIC_URL}images/es-elementos.svg`} alt="Espaço entre elementos" />
          </SvCol>
        </SvRow>
      </div>
    );
  }
}

export default Espacamento;
