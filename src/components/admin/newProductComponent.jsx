"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useRouter } from "next/navigation";
import { addArticle } from "@/services/ArticleService";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const NewProduct = ({ scategories }) => {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [imageart, setImageart] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      const newProduct = {
        designation,
        imageart,
        prix,
        qtestock,
      };
      // Faire l'ajout dans la BD
      addArticle(newProduct)
        .then((res) => {
          router.push("/admin/products");
          router.refresh();
        })
        .catch((error) => {
          alert("Erreur ! Insertion non effectuée");
        });
    }
    setValidated(true);
  };

  const serverOptions = () => {
    return {
      process: (fieldName, file, metadata, load, error, progress, abort) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "dmf4akoqh");
        data.append("cloud_name", "dmf4akoqh");
        data.append("public_id", file.name);
        axios
          .post("https://api.cloudinary.com/v1_1/dmf4akoqh/image/upload", data)
          .then((response) => response.data)
          .then((data) => {
            setImageart(data.url);
            load(data);
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
            error("Upload failed");
            abort();
          });
      },
    };
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
          Ajout Produit
        </h4>
        <div className="container w-100 d-flex justify-content-center">
          <div>
            <div className="form mt-3">
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Désignation *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Désignation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Saisir la désignation
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Prix</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Prix"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>Qté stock *</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Qté stock"
                    value={qtestock}
                    onChange={(e) => setQtestock(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Saisir la quantité en stock
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Image</Form.Label>
                  <div style={{ width: "80%", margin: "auto", padding: "1%" }}>
                    <FilePond
                      files={files}
                      acceptedFileTypes="image/*"
                      onupdatefiles={setFiles}
                      allowMultiple={false}
                      server={serverOptions()}
                      name="file"
                    />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Image"
                    value={imageart}
                    onChange={(e) => setImageart(e.target.value)}
                  />
                </Form.Group>
              </Row>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Button type="submit" style={{ marginRight: "10px" }}>
            Enregistrer
          </Button>
          <Button
            type="button"
            className="btn btn-warning"
            onClick={() => handleReset()}
          >
            Annuler
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewProduct;
