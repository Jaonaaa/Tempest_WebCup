<?php
defined('BASEPATH') or exit('No direct script access allowed');
date_default_timezone_set('Indian/Antananarivo');
class UtilisateurCI extends CI_Controller
{
    public function index()
    {
        $this->load->view('Home');
    }

    public function login()
    {
        $this->load->view('Login');
    }


    public function pay()
    {
        $this->load->view('Payement');
    }

    public function tous_pays()
    {
        $this->load->model('Pays');
        $pays = $this->Pays->pays_details();
        echo json_encode($pays);
    }
    public function service()
    {
        $this->load->view('Services');
    }

    public function register_user()
    {
        $input_stream = file_get_contents('php://input');
        $data = json_decode($input_stream, true);
        $name = $data['name'];
        $fname = $data['fname'];
        $email = $data['email'];
        $idpays = $data['idCountry'];
        //$idstatus = $data['idCountry'];
        $idstatus = $data['status'];;
        $sexe = $data['sexe'];
        $num = $data['num'];
        $dtn = $data['dtn'];
        $mdp = $data['mdp'];

        $this->load->model('Utilisateur');
        if (trim($name) == '' || trim($email) == '' || trim($num) == '' || trim($mdp) == '') {
            echo '1';
        } else {
            $data = $this->Utilisateur->insert_user($name, $fname, $mdp, $email, $dtn, $sexe, $idpays, $idstatus, $num);
            echo $data;
        }
    }

    public function register()
    {
        $this->load->model('Utilisateur');
        $countries = $this->Utilisateur->country_details();
        $data = array();
        $data['countries'] = $countries;
        $this->load->view('register', $data);
    }

    public function give_debut_number()
    {
        $idCountry = $this->uri->segment(3);
        $this->load->model('Utilisateur');
        $country = $this->Utilisateur->country_currency($idCountry);
        if ($country) {
            echo $country['debut_num'];
        } else {
            echo "1";
        }
    }

    public function checkuser()
    {
        $input_stream = file_get_contents('php://input');
        $data = json_decode($input_stream, true);
        $email = $data['email'];
        $mdp = $data['mdp'];
        $temail = trim($email);

        $this->load->model('Utilisateur');
        $data = $this->Utilisateur->checkuser($temail, $mdp);
        if ($data == null) {
            echo "1";
        } else {
            $user_data_json = json_encode($data);
            $this->session->set_userdata('user_data', $user_data_json);
            echo "0";
        }
    }

    public function home_page()
    {
        if ($this->session->has_userdata('user_data') == true) {
            $user_data_json = $this->session->userdata('user_data');
            $data = array();
            $data['user'] = json_decode($user_data_json, true);
            $data['title'] = 'Welcome | home';
            $data['entete'] = 'main/header';
            $data['contents'] = 'home';
            $this->load->view('main/main', $data);
        } else {
            redirect("UtilisateurCI/index");
        }
    }
    public function deconnect()
    {
        $this->session->unset_userdata('user_data');
        redirect("index.php/UtilisateurCI/index");
    }
}