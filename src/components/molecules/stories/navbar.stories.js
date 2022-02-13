import React from "react"

import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid"

import { Body } from "../../atoms/styled/typography/typographyComponents"
import { Col } from "../../atoms/styled/layout/layoutComponents"

export default {
  title: "Molecules/Navbars/Navbar",
  parameters: {
    layout: "fullscreen"
  },
  args: {
    menus: [
      {
        "name": "Helyszínek",
        "slug": "/test",
      },
      {
        "name": "Szolgáltatások",
        "slug": "/test",
      },
      {
        "name": "Ajánlatkérés",
        "slug": "/test",
      },
      {
        "name": "Kapcsolat",
        "slug": "/test",
      },
    ],
    isCamp: false,
  }
}

export const navbar = ({ ...args }) => (
  <>
    <Navbar {...args} />
    <Sidebar {...args} />
    <SectionLayoutGrid>
      <Col>
        <Body color="dark-blue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta erat sapien, sit amet faucibus ante
          facilisis in. Sed nec sollicitudin arcu. Duis facilisis imperdiet tincidunt. Donec facilisis ut leo vel
          efficitur. Aenean euismod tellus sed nunc interdum lacinia. Ut interdum, justo id fringilla mattis, arcu enim
          vulputate libero, at dignissim ante eros sit amet mi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Curabitur commodo nec erat at viverra. Maecenas mollis orci non efficitur
          lobortis. Quisque ut tortor a felis malesuada laoreet vel quis mi. Donec ultricies, lorem vitae semper
          tristique, nisi purus scelerisque massa, in lobortis massa nisi non libero. Donec tristique consectetur erat
          et interdum. Mauris commodo neque in pellentesque lacinia. Vivamus lacinia urna at urna lobortis malesuada.
          Suspendisse suscipit risus laoreet erat efficitur pellentesque.
          <br />
          Nam venenatis arcu ut turpis dictum lobortis. Praesent euismod lobortis arcu eu accumsan. Fusce egestas
          scelerisque odio nec eleifend. Duis id leo nisl. Nullam fringilla, ex quis placerat bibendum, lacus lectus
          pulvinar justo, id suscipit dui arcu sed sapien. Suspendisse ac elit quis elit sollicitudin finibus quis et
          tortor. Maecenas ut tortor feugiat, commodo nulla ac, elementum enim. In lobortis risus in auctor rhoncus.
          Nulla convallis ex et ipsum efficitur cursus. Nullam ut quam dapibus, mollis risus ac, tempor enim.
          <br />
          Nunc semper, justo et dapibus pellentesque, nulla mauris dictum metus, quis hendrerit tellus justo sagittis
          risus. Nullam ante urna, semper et lorem nec, faucibus posuere diam. Duis semper maximus enim, ut volutpat
          diam mattis ac. Pellentesque eget sollicitudin tellus, eu sodales elit. Pellentesque imperdiet nunc lacus, et
          lobortis leo vestibulum vitae. Proin quis consectetur magna. Phasellus eleifend, diam et pretium ultrices, ex
          elit laoreet ante, at dictum dolor nisi at erat. Duis in justo rutrum, pretium nunc eu, vehicula ipsum. Nam eu
          nisi pharetra, convallis turpis non, aliquam nulla. Vivamus ut fermentum tellus. Nam eget efficitur tortor,
          eget venenatis lorem. Quisque vel laoreet enim. Aliquam et bibendum felis.
        </Body>
      </Col>
    </SectionLayoutGrid>
    <SectionLayoutGrid>
      <Col>
        <Body color="dark-blue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta erat sapien, sit amet faucibus ante
          facilisis in. Sed nec sollicitudin arcu. Duis facilisis imperdiet tincidunt. Donec facilisis ut leo vel
          efficitur. Aenean euismod tellus sed nunc interdum lacinia. Ut interdum, justo id fringilla mattis, arcu enim
          vulputate libero, at dignissim ante eros sit amet mi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Curabitur commodo nec erat at viverra. Maecenas mollis orci non efficitur
          lobortis. Quisque ut tortor a felis malesuada laoreet vel quis mi. Donec ultricies, lorem vitae semper
          tristique, nisi purus scelerisque massa, in lobortis massa nisi non libero. Donec tristique consectetur erat
          et
          interdum. Mauris commodo neque in pellentesque lacinia. Vivamus lacinia urna at urna lobortis malesuada.
          Suspendisse suscipit risus laoreet erat efficitur pellentesque.
          <br />
          Nam venenatis arcu ut turpis dictum lobortis. Praesent euismod lobortis arcu eu accumsan. Fusce egestas
          scelerisque odio nec eleifend. Duis id leo nisl. Nullam fringilla, ex quis placerat bibendum, lacus lectus
          pulvinar justo, id suscipit dui arcu sed sapien. Suspendisse ac elit quis elit sollicitudin finibus quis et
          tortor. Maecenas ut tortor feugiat, commodo nulla ac, elementum enim. In lobortis risus in auctor rhoncus.
          Nulla
          convallis ex et ipsum efficitur cursus. Nullam ut quam dapibus, mollis risus ac, tempor enim.
          <br />
          Nunc semper, justo et dapibus pellentesque, nulla mauris dictum metus, quis hendrerit tellus justo sagittis
          risus. Nullam ante urna, semper et lorem nec, faucibus posuere diam. Duis semper maximus enim, ut volutpat
          diam
          mattis ac. Pellentesque eget sollicitudin tellus, eu sodales elit. Pellentesque imperdiet nunc lacus, et
          lobortis leo vestibulum vitae. Proin quis consectetur magna. Phasellus eleifend, diam et pretium ultrices, ex
          elit laoreet ante, at dictum dolor nisi at erat. Duis in justo rutrum, pretium nunc eu, vehicula ipsum. Nam eu
          nisi pharetra, convallis turpis non, aliquam nulla. Vivamus ut fermentum tellus. Nam eget efficitur tortor,
          eget
          venenatis lorem. Quisque vel laoreet enim. Aliquam et bibendum felis.
        </Body>
      </Col>
    </SectionLayoutGrid>
  </>
)
