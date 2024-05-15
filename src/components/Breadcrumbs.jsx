import { Breadcrumbs } from '@mui/material'
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';

const breadcrumbs = ({link1, link2, link3}) => {
  return (
    <>
      {
        link1 &&
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <div>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href={`/catalog`}>
              Каталог
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href={`/${link1.url}`}>
              {link1.name}
            </Link>
            {
              link2 &&
              <div>
                <Link
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                  color="inherit"
                  href={`/${link2.url}`}>
                  {link2.name}
                </Link>
                {
                  link3 &&
                  <div>
                    <Link
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"
                      href={`/${link3.url}`}>
                      {link3.name}
                    </Link>
                  </div>
                }
              </div>
            }
          </div>
        </Breadcrumbs>
      }
    </>
  )
}

export default breadcrumbs
