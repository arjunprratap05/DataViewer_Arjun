import { useContext, useState } from "react";
import { SKUContext } from "../context/SKUContext";
import {
  Box,
  Typography,
  Button,
  List,
  ListItemText,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const SKUPage = () => {
  const { skus, addSKU, updateSKU } = useContext(SKUContext);
  const [open, setOpen] = useState(false);
  const [selectedSKU, setSelectedSKU] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  if (!skus) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Open the popup and set the selected SKU data
  const handleEditClick = (sku) => {
    setSelectedSKU(sku);
    setEditedName(sku.name);
    setEditedPrice(sku.price);
    setOpen(true);
  };

  // Handle save changes
  const handleSave = () => {
    updateSKU(selectedSKU.id, { name: editedName, price: Number(editedPrice) });
    setOpen(false);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", mt: 3, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        SKU List
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => addSKU({ id: Date.now(), name: "New SKU", price: 150 })}
        sx={{ mb: 2 }}
      >
        Add SKU
      </Button>

      <List>
        {skus.map((sku) => (
          <Card key={sku.id} sx={{ mb: 2 }}>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <ListItemText
                  primary={sku.name}
                  secondary={`Price: $${sku.price}`}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleEditClick(sku)}
                >
                  Edit
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </List>

      {/* Edit SKU Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit SKU</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Price"
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SKUPage;
