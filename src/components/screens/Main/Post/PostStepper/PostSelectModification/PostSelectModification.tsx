import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Divider, Stack } from "@mui/material";

import AbsoluteBox from "@components/modules/AbsoluteBox";
import SubmitButton from "@components/ui/Button/SubmitButton";

import SelectTransportForm from "./SelectEngineForm";
import SelectSparesForm from "./SelectGearForm";
import SelectEngineForm from "./SelectEngineForm";
import SelectGearForm from "./SelectGearForm";

interface Props {
  forFilter?: boolean;
}

const PostSelectModification: React.FC<Props> = ({ forFilter }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  console.log(forFilter);

  return (
    <Stack spacing={1.25}>
      <Accordion
        disableGutters
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              display: "flex",
              gap: "5px",
            }}
          >
            Двигатель -{" "}
            <Typography
              variant={"caption"}
              sx={{ color: "grey.100", fontSize: "18px" }}
            >
              Бензиновый
            </Typography>
          </Typography>
        </AccordionSummary>
        <Divider variant="middle" />
        <AccordionDetails>
          <SelectEngineForm expanded={expanded} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Привод
          </Typography>
        </AccordionSummary>
        <Divider variant="middle" />
        <AccordionDetails>
          <SelectGearForm expanded={expanded} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Коробка передач
          </Typography>
        </AccordionSummary>
        <Divider variant="middle" />
        <AccordionDetails>
          <SelectGearForm expanded={expanded} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Модификации
          </Typography>
        </AccordionSummary>
        <Divider variant="middle" />
        <AccordionDetails>
          <SelectGearForm expanded={expanded} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Руль
          </Typography>
        </AccordionSummary>
        <Divider variant="middle" />
        <AccordionDetails>
          <SelectGearForm expanded={expanded} />
        </AccordionDetails>
      </Accordion>

      <Box
        sx={{
          display: expanded === false ? "initial" : "none",
        }}
      >
        <AbsoluteBox>
          <SubmitButton type="submit" disabled={expanded === false && true} />
        </AbsoluteBox>
      </Box>
    </Stack>
  );
};

export default PostSelectModification;
