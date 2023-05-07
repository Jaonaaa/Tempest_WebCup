<?php
defined('BASEPATH') OR exit('No direct script access allowed');
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Student
 *
 * @author rango
 */
class Paiement extends CI_Model {

    public function __construct(){
        date_default_timezone_set('Indian/Antananarivo');
    }

    //insertion d'un utilisateur_abonnement 
    public function utilisateur_abonnement($id_utilisateur,$id_abonnement){
        $data = array();
        $data = $this->dernier_abonnement($id_utilisateur);
        $date_prochain = date("Y-m-d ",strtotime($data['date_debut'].'+'.$data['duree_abonnement'].' months'));
        $str = "insert into utilisateur_abonnement (id_utilisateur,id_abonnement,date_debut ) values(%s,%s,'%s')";
        $query = $this->db->query(sprintf($str,$data['id_utilisateur'],$id_abonnement,$date_prochain));
        return $data['prix'];
    }

    //prendre tous les abonnements disponibles 
    public function get_abonnement(){
        $request = "select * from abonnement ";
        $query = $this->db->query($request);
        $abonnement = array();
        foreach($query->result_array() as $row) {
            $abonnement[] = $row;
        }

        return $abonnement;
    }

    //prendre tous les mode de paiement
    public function get_mode_paiement(){
        $request = "select * from mode_paiement ";
        $query = $this->db->query($request);
        $paiement = array();
        foreach($query->result_array() as $row) {
            $paiement[] = $row;
        }
        return $paiement;
    }

    //prendre le dernier abonnement
    public function dernier_abonnement($id_utilisateur){
        $request = "select * from v_paiement where id_utilisateur = %s ORDER BY id_utilisateur_abonnement desc limit 1";
        $query = $this->db->query(sprintf($request,$id_utilisateur));
        $row = $query->row_array();
        return $row;
    }

    //insertion du paiement de l'utilisateur
    public function paiement($id_utilisateur,$id_mode_paiement,$numero_carte,$id_abonnement){
        $montant = $this->utilisateur_abonnement($id_utilisateur,$id_abonnement);
        $str = "insert into paiement (id_utilisateur,id_mode_paiement,date_paiement,numero_carte,montant) values(%s,%s,now(),'%s',%s)";
         $query = $this->db->query(sprintf($str,$id_utilisateur,$id_mode_paiement,$numero_carte,$montant));
    }

    //prendre la valeur en bitcoin d'une unite de monnaie
    public function get_value($id_pays){
        $request = "select * from v_monnaie where id_pays = %s ORDER BY date desc limit 1";
        $query = $this->db->query(sprintf($request,$id_utilisateur));
        $row = $query->row_array();
        return $row;
    }
}