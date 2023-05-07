<?php
defined('BASEPATH') or exit('No direct script access allowed');
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
class Reve extends CI_Model
{
    public function __construct()
    {

    }

    //prendre les predictions adequates
    public function get_reve_detail($id_reve_detail, $id_status, $age)
    {
        $request = "select * from  v_reve_detail_completed where id_reve_detail = %s and id_status = %s and ( min_age <= %s and max_age >= %s ) ";
        // echo sprintf($request,$id_reve_detail,$id_status,$age,$age);
        $query = $this->db->query(sprintf($request, $id_reve_detail, $id_status, $age, $age));
        $row = $query->row_array();
        if ($row == null) {
            $request = "select * from  v_reve_detail_completed where id_reve_detail = %s limit 1 ";
            // echo sprintf($request,$id_reve_detail);
            $query = $this->db->query(sprintf($request, $id_reve_detail));
            $row = $query->row_array();
        }
        return $row;
    }

    //insertion de reve_categorie
    public function reve_categorie($nom_reve_categorie)
    {
        $str = "insert into reve_categorie (nom_reve_categorie) values('%s')";
        $query = $this->db->query(sprintf($str, $nom_reve_categorie));
    }

    //prendre le dernier reve_detail 
    public function get_last_reve_detail()
    {
        $request = "select * from  reve_detail order by id_reve_detail desc limit 1";
        // echo sprintf($request,$id_reve_detail);
        $query = $this->db->query($request);
        $row = $query->row_array();
        return $row;
    }

    //insertion de reve detail
    public function reve_detail($nom_reve_detail, $id_reve_categorie)
    {
        $str = "insert into reve_detail (nom_reve_detail,id_reve_categorie) values('%s',%s)";
        $query = $this->db->query(sprintf($str, $nom_reve_detail, $id_reve_categorie));
    }
    //insertion de reve_description
    public function reve_description($id_reve_detail, $description, $conseil)
    {
        $str = "insert into reve_description (id_reve_detail,id_status,id_tranche_age,description_reve,conseil ) values(%s,1,1,'%s','%s')";
        echo sprintf($str, $id_reve_detail, $description, $conseil);
    }

    //prendre tous les historiques d'un utilisateur
    public function historique($id_utilisateur)
    {
        $request = "select * from v_reve_utilisateur where id_utilisateur = %s";
        $query = $this->db->query(sprintf($request, $id_utilisateur));
        $reve = array();
        foreach ($query->result_array() as $row) {
            $reve[] = $row;
        }

        return $reve;
    }

    //prendre les nombre par categories 
    public function get_statistique($date_reve_deb, $date_reve_fin)
    {
        $request = "select id_reve_detail,nom_reve_detail, count(*) as count  from v_reve_utilisateur where date_reve >= '%s' and date_reve <= '%s' group by id_reve_detail,nom_reve_detail ";
        $query = $this->db->query(sprintf($request, $date_reve_deb, $date_reve_fin));
        $reve = array();
        $count = $this->get_count_reve();
        foreach ($query->result_array() as $row) {
            $reve[] = $row;
            $reve[count($reve) - 1]['count'] = ($reve[count($reve) - 1]['count'] / $count['count']) * 100;
        }

        return $reve;
    }


    //prendre le nombre de  reve_utilisateur 
    public function get_count_reve()
    {
        $request = "select coalesce(count(*),0) as count  from v_reve_utilisateur";
        $query = $this->db->query(sprintf($request));
        $row = $query->row_array();
        return $row;
    }

    //prendre tous les reve_categorie
    public function get_reve_categorie()
    {
        $request = "select * from reve_categorie";
        $query = $this->db->query($request);
        $reve = array();
        foreach ($query->result_array() as $row) {
            $reve[] = $row;
        }

        return $reve;
    }

    //prendre tous les reve_detail correspondant a un reve_categorie
    public function get_reve_detail_categorie($id_reve_categorie)
    {
        $request = "select * from reve_detail where id_reve_categorie = %s";
        $query = $this->db->query(sprintf($request, $id_reve_categorie));
        $reve = array();
        foreach ($query->result_array() as $row) {
            $reve[] = $row;
        }
        return $reve;
    }


}