<?php
defined('BASEPATH') or exit('No direct script access allowed');

class PaiementCI extends CI_Controller
{
    public function __construct()
    {
        parent::__construct;
        $this->load->model('Paiement');
    }
    public function get_mode_paiement()
    {
        $data = $this->Paiement->get_mode_paiement();
        echo json_encode($data);
    }
    public function get_valeur()
    {
        if (isset($_SESSION['user_data'])) {
            $data = json_decode($_SESSION['user_data'], true);
            $monnaie = $this->Paiement->get_value($data['id_pays']);
            echo json_encode($monnaie);
        }
    }

}