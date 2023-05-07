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
class Psy extends CI_Model {
    public function get_psy(){
        $request = "select * from psy ";
        $query = $this->db->query($request);
        $psy = array();
        foreach($query->result_array() as $row) {
            $psy[] = $row;
        }

        return $psy;
    }
}