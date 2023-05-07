<?php
defined('BASEPATH') or exit('No direct script access allowed');

class PsyCI extends CI_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model('Psy');
    }
    public function index(){
        $data = $this->Psy->get_psy();
        echo json_encode($data);
    }
}