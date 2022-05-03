import Link from "next/link";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

export type NavLink = {
  href: string;
  label: string;
  icon: React.ReactElement;
  hide?: () => boolean;
  dividerAfter?: boolean;
};

const Headers = ({ links }: { links: NavLink[] }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        color="inherit"
        // position="sticky"
        sx={{
          height: `150px`,
          position: `fixed`,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: `100%`,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              height: `100%`,
            }}
          >
            <Image
              src="/images/logos/melnickHouse1.jpg"
              height={150}
              width={320}
              alt="Melnick and Sons"
            />
            <Stack
              spacing={2}
              direction="row"
              justifyContent={`space-evenly`}
              alignItems="center"
              sx={{ display: { xs: `none`, md: `flex` } }}
            >
              {links.map(({ href, label, hide }) => {
                return hide && hide() ? null : (
                  <Link key={label} href={href} passHref>
                    <Button variant="text" color="primary">
                      {label}
                    </Button>
                  </Link>
                );
              })}
            </Stack>
            <Stack spacing={2} sx={{ display: { xs: `flex`, md: `none` } }}>
              <IconButton
                color="primary"
                onClick={() => {
                  setDrawerOpen(true);
                }}
              >
                <Menu />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <Box
          component="div"
          sx={{ width: 250 }}
          // role="presentation"
          // onClick={setDrawerOpen(false)}
          // onKeyDown={setDrawerOpen(false)}
        >
          <List>
            {links.map(({ label, href, icon, hide, dividerAfter }) => {
              return hide && hide() ? null : (
                <>
                  <Link key={label} href={href} passHref>
                    <ListItem button>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={label} />
                    </ListItem>
                  </Link>
                  {dividerAfter && <Divider />}
                </>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Headers;
