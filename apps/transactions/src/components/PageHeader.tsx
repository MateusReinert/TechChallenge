"use client";

import { Box, Typography } from "@mui/material";
import { pageHeaderStyles } from "@/styles/pageHeaderStyles";

type PageHeaderProps = {
  title: string;
  breadcrumb: string[];
};

export default function PageHeader({
  title,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <Box sx={pageHeaderStyles.root}>
      <Typography sx={pageHeaderStyles.title}>
        {title}
      </Typography>

      <Box sx={pageHeaderStyles.breadcrumb}>
        {breadcrumb.map((item, index) => {
          const isLast = index === breadcrumb.length - 1;

          return (
            <Box
              key={`${item}-${index}`}
              sx={pageHeaderStyles.breadcrumbGroup}
            >
              <Typography
                sx={
                  isLast
                    ? pageHeaderStyles.breadcrumbLast
                    : pageHeaderStyles.breadcrumbItem
                }
              >
                {item}
              </Typography>

              {!isLast && (
                <Typography sx={pageHeaderStyles.breadcrumbSeparator}>
                  &gt;
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}