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
class Pays extends CI_Model {
    // Get all details of a country
    public function pays_details(){
        $query = sprintf("SELECT * FROM v_pays_details"); 
        $rep = $this->db->query($query);
        $count = 0;

        foreach($rep->result_array() as $row){
            $count++;
            $result[] = $row;
        }
        if($count == 0) return 0;
        return $result;
    }   
}
?>