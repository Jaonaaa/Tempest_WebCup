<?php
defined('BASEPATH') or exit('No direct script access allowed');

class ReveCI extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Reve');
        // $this->load->controller('')
    }
    public function get_reve_categorie()
    {
        $data = $this->Reve->get_reve_categorie();
        echo json_encode($data);
    }

    public function index()
    {
        $data = json_decode($_SESSION['user_data'], true);
        $this->load->view('Prediction', $data);

    }

    public function get_reve_detail()
    {
        if (isset($_POST['id_categorie'])) {
            $data = $this->Reve->get_reve_detail_categorie($_POST['id_categorie']);
            echo json_encode($data);
        }
    }
    public function get_reve()
    {
        if (isset($_POST['id_reve_detail']) && isset($_SESSION['user_data'])) {
            $data = json_decode($_SESSION['user_data'], true);
            $result = $this->Reve->get_reve_detail($_POST['id_reve_detail'], $data['id_status'], $data['age']);
            echo json_encode($result);

        }

    }
}