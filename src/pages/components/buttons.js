import React, { Component } from 'react';
import { SvRow, SvCol } from 'syntec-apollo-11';
import { SvButton, SvButtonOutline, SvButtonLink, SvButtonAnimated } from 'syntec-apollo-11';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ShowCase from '../../components/business/showcase/showcase';
import ButtonExamples from '../../codes/buttons';

const buttonFullExampeShow = () =>
  <div>
    <p className="sv-text-center">
      <SvButton className="sv-mr--5" color="primary">
        Primary
      </SvButton>
      <SvButton className="sv-mr--5" color="info">
        Info
      </SvButton>
      <SvButton className="sv-mr--5" color="danger">
        Danger
      </SvButton>
      <SvButton className="sv-mr--5" color="warning">
        Warning
      </SvButton>
      <SvButton className="sv-mr--5">Default</SvButton>
    </p>

    <p className="sv-padd-5" />

    <p className="sv-text-center">
      <SvButtonOutline className="sv-mr--5" color="primary">
        Primary
      </SvButtonOutline>
      <SvButtonOutline className="sv-mr--5" color="info">
        Info
      </SvButtonOutline>
      <SvButtonOutline className="sv-mr--5" color="danger">
        Danger
      </SvButtonOutline>
      <SvButtonOutline className="sv-mr--5" color="warning">
        Warning
      </SvButtonOutline>
      <SvButtonOutline className="sv-mr--5">Default</SvButtonOutline>
    </p>

    <p className="sv-padd-5" />

    <p className="sv-text-center">
      <SvButtonLink className="sv-mr--5" color="primary">
        Primary
      </SvButtonLink>
      <SvButtonLink className="sv-mr--5" color="info">
        Info
      </SvButtonLink>
      <SvButtonLink className="sv-mr--5" color="danger">
        Danger
      </SvButtonLink>
      <SvButtonLink className="sv-mr--5" color="warning">
        Warning
      </SvButtonLink>
      <SvButtonLink className="sv-mr--5">Default</SvButtonLink>
    </p>
  </div>;

const smallButtonFullExampeShow = () =>
  <div>
    <p className="sv-text-center">
      <SvButton className="sv-mr--5" color="primary" small>
        Primary
      </SvButton>
      <SvButton className="sv-mr--5" color="info" small>
        Info
      </SvButton>
      <SvButton className="sv-mr--5" color="danger" small>
        Danger
      </SvButton>
      <SvButton className="sv-mr--5" color="warning" small>
        Warning
      </SvButton>
      <SvButton className="sv-mr--5" small>
        Default
      </SvButton>
    </p>

    <p className="sv-padd-5" />

    <p className="sv-text-center">
      <SvButtonOutline className="sv-mr--5" color="primary" small>
        Primary
      </SvButtonOutline>
      <SvButtonOutline className="sv-mr--5" color="info" small>
        Info
      </SvButtonOutline>
      <SvButtonOutline className="sv-mr--5" color="danger" small>
        Danger
      </SvButtonOutline>
      <SvButtonOutline className="sv-mr--5" color="warning" small>
        Warning
      </SvButtonOutline>
      <SvButtonOutline className="sv-mr--5" small>
        Default
      </SvButtonOutline>
    </p>

    <p className="sv-padd-5" />

    <p className="sv-text-center">
      <SvButtonLink className="sv-mr--5" color="primary" small>
        Primary
      </SvButtonLink>
      <SvButtonLink className="sv-mr--5" color="info" small>
        Info
      </SvButtonLink>
      <SvButtonLink className="sv-mr--5" color="danger" small>
        Danger
      </SvButtonLink>
      <SvButtonLink className="sv-mr--5" color="warning" small>
        Warning
      </SvButtonLink>
      <SvButtonLink className="sv-mr--5" small>
        Default
      </SvButtonLink>
    </p>
  </div>;

/*  
const smallButtonAnimatedExampeShow = () =>
  <div>
    <p className="sv-text-center">
      <SvButtonAnimated className="sv-mr--5" color="primary" icon="mail">
        Mail
      </SvButtonAnimated>
      <SvButtonAnimated className="sv-mr--5" color="info" icon="view">
        View
      </SvButtonAnimated>
      <SvButtonAnimated className="sv-mr--5" color="danger" icon="exit">
        Exit
      </SvButtonAnimated>
      <SvButtonAnimated className="sv-mr--5" color="warning" icon="search">
        Search
      </SvButtonAnimated>
      <SvButtonAnimated className="sv-mr--5" icon="open">
        Open
      </SvButtonAnimated>
      <SvButtonAnimated className="sv-mr--5" color="danger" icon="upload">
        Upload
      </SvButtonAnimated>
      <SvButtonAnimated className="sv-mr--5" color="warning" icon="download">
        Download
      </SvButtonAnimated>
    </p>
  </div>;
*/

const fullButtonExampeShow = () =>
  <div>
    <SvButton className="sv-mr--5" color="primary" full>
      Primary
    </SvButton>

    <SvButtonOutline className="sv-mr--5" color="info" full>
      Info
    </SvButtonOutline>
  </div>;

const buttonStyles = () =>
  <div>
    <p className="sv-text-center">
      <button className="sv-button primary sv-mr--5">Primary</button>
      <button className="sv-button info sv-mr--5">Info</button>
      <button className="sv-button danger sv-mr--5">Danger</button>
      <button className="sv-button warning sv-mr--5">Warning</button>
      <button className="sv-button default sv-mr--5">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button out-primary sv-mr--5">Primary</button>
      <button className="sv-button out-info sv-mr--5">Info</button>
      <button className="sv-button out-danger sv-mr--5">Danger</button>
      <button className="sv-button out-warning sv-mr--5">Warning</button>
      <button className="sv-button out-default sv-mr--5">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button link link-primary sv-mr--5">Primary</button>
      <button className="sv-button link link-info sv-mr--5">Info</button>
      <button className="sv-button link link-danger sv-mr--5">Danger</button>
      <button className="sv-button link link-warning sv-mr--5">Warning</button>
      <button className="sv-button link link-default sv-mr--5">Default</button>
    </p>
  </div>;

const smallButtons = () =>
  <div>
    <p className="sv-text-center">
      <button className="sv-button primary small sv-mr--5">Primary</button>
      <button className="sv-button info small sv-mr--5">Info</button>
      <button className="sv-button danger small sv-mr--5">Danger</button>
      <button className="sv-button warning small sv-mr--5">Warning</button>
      <button className="sv-button default small sv-mr--5">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button out-primary small sv-mr--5">Primary</button>
      <button className="sv-button out-info small sv-mr--5">Info</button>
      <button className="sv-button out-danger small sv-mr--5">Danger</button>
      <button className="sv-button out-warning small sv-mr--5">Warning</button>
      <button className="sv-button out-default small sv-mr--5">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button link link-primary small sv-mr--5">Primary</button>
      <button className="sv-button link link-info small sv-mr--5">Info</button>
      <button className="sv-button link link-danger small sv-mr--5">Danger</button>
      <button className="sv-button link link-warning small sv-mr--5">Warning</button>
      <button className="sv-button link link-default small sv-mr--5">Default</button>
    </p>
  </div>;

const fullButtons = () =>
  <div>
    <p>
      <button className="sv-button primary full">Primary full</button>
    </p>
    <p>
      <button className="sv-button out-primary full">Primary full</button>
    </p>
  </div>;

const animatedButtons = () =>
  <div>
    <button className="sv-bt-animated primary mail sv-mr--5">
      <span>Enviar</span>
    </button>
    <button className="sv-bt-animated danger delete sv-mr--5">
      <span>Excluir</span>
    </button>
    <button className="sv-bt-animated default view sv-mr--5">
      <span>Visualizar</span>
    </button>
    <button className="sv-bt-animated info exit sv-mr--5">
      <span>Sair</span>
    </button>
    <button className="sv-bt-animated info search sv-mr--5">
      <span>Procurar</span>
    </button>
    <button className="sv-bt-animated info open sv-mr--5">
      <span>Abrir</span>
    </button>
    <button className="sv-bt-animated info upload sv-mr--5">
      <span>Upload</span>
    </button>
    <button className="sv-bt-animated info download sv-mr--5">
      <span>Download</span>
    </button>
  </div>;

class ButtonsPage extends Component {
  render() {
    return (
      <div>
        <h3 className="sv-fw-normal sv-mb--15">BUTTONS</h3>
        <Tabs className="ReactTabs">
          <TabList className="ReactTabs__tab-list">
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Saturn-V
            </Tab>
            <Tab
              className="ReactTabs__tab"
              selectedClassName="ReactTabs__tab--selected"
              disabledClassName="ReactTabs__tab--disabled"
            >
              Apollo-11
            </Tab>
          </TabList>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <h4 className="sv-fw-normal sv-ts-i">Estilos</h4>
            <hr />

            <p className="sv-text-big sv-mt--15">Solid, Outline e Link buttons possuem variantes de estilos.</p>

            <ShowCase example={buttonStyles} code={ButtonExamples.example2} height="220px" />

            <h4 className="sv-fw-normal sv-ts-i">Small Buttons</h4>
            <hr />

            <ShowCase example={smallButtons} code={ButtonExamples.example3} height="220px" />

            <h4 className="sv-fw-normal sv-ts-i">Full Buttons</h4>
            <hr />

            <ShowCase example={fullButtons} code={ButtonExamples.example4} height="130px" />

            <h4 className="sv-fw-normal sv-ts-i">Botões com animação</h4>
            <hr />

            <ShowCase example={animatedButtons} code={ButtonExamples.animated} height="180px" />
          </TabPanel>
          <TabPanel className="ReactTabs__tab-panel" selectedClassName="ReactTabs__tab-panel--selected">
            <h4 className="sv-fw-normal sv-ts-i">Estilos</h4>
            <hr />

            <p>
              Os Buttons do Saturn-V também estão disponíveis no Apollo-11, visando assim facilitar o uso dos botões em
              seu projeto.
            </p>

            <ShowCase
              height="210px"
              example={buttonFullExampeShow}
              code={ButtonExamples.example1Apollo}
              language="jsx"
            />

            <h4 className="sv-fw-normal sv-ts-i">Small Buttons</h4>
            <hr />

            <ShowCase
              height="210px"
              example={smallButtonFullExampeShow}
              code={ButtonExamples.smallExampleApollo}
              language="jsx"
            />

            <h4 className="sv-fw-normal sv-ts-i">Full Buttons</h4>
            <hr />

            <ShowCase
              height="210px"
              example={fullButtonExampeShow}
              code={ButtonExamples.fullExampleApollo}
              language="jsx"
            />

            <h4 className="sv-fw-normal sv-ts-i">SvButton PropTypes</h4>
            <hr />
            <table className="sv-table with--hover with--borders">
              <thead>
                <tr>
                  <th>Propriedade</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>className</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Classes CSS adicionais.</td>
                </tr>
                <tr>
                  <td>
                    <code>color</code>
                  </td>
                  <td>
                    <code>
                      oneOf(['primary', 'info', 'danger', 'warning', <strong>'default'</strong>])
                    </code>
                  </td>
                  <td>
                    Definição de cores:<br />
                    a) Background quando
                  </td>
                </tr>
                <tr>
                  <td>full</td>
                  <td>bool</td>
                  <td>
                    Indica se o botão ocupará a área total. <strong>false</strong> é o default
                  </td>
                </tr>
                <tr>
                  <td>small</td>
                  <td>bool</td>
                  <td>
                    Botão menor. <strong>false</strong> é o default
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 className="sv-fw-normal sv-ts-i">SvButtonOutline PropTypes</h4>
            <hr />
            <table className="sv-table with--hover with--borders">
              <thead>
                <tr>
                  <th>Propriedade</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>className</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Classes CSS adicionais.</td>
                </tr>
                <tr>
                  <td>
                    <code>color</code>
                  </td>
                  <td>
                    <code>oneOf(['primary', 'info', 'danger', 'warning', 'default'])</code>
                  </td>
                  <td>
                    Definição de cores:<br />
                    a) Borda e texto
                  </td>
                </tr>
                <tr>
                  <td>full</td>
                  <td>bool</td>
                  <td>
                    Indica se o botão ocupará a área total. <strong>false</strong> é o default
                  </td>
                </tr>
                <tr>
                  <td>small</td>
                  <td>bool</td>
                  <td>
                    Botão menor. <strong>false</strong> é o default
                  </td>
                </tr>
              </tbody>
            </table>

            <h4 className="sv-fw-normal sv-ts-i">SvButtonLink PropTypes</h4>
            <hr />
            <table className="sv-table with--hover with--borders">
              <thead>
                <tr>
                  <th>Propriedade</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>className</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Classes CSS adicionais.</td>
                </tr>
                <tr>
                  <td>
                    <code>color</code>
                  </td>
                  <td>
                    <code>oneOf(['primary', 'info', 'danger', 'warning', 'default'])</code>
                  </td>
                  <td>
                    Definição de cores:<br />
                    a)Texto
                  </td>
                </tr>
                <tr>
                  <td>small</td>
                  <td>bool</td>
                  <td>
                    Botão menor. <strong>false</strong> é o default
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default ButtonsPage;
