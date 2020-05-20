(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{457:function(t,e,a){"use strict";a.r(e);var l=a(45),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vmware-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vmware-configuration"}},[t._v("#")]),t._v(" VMware configuration")]),t._v(" "),a("p",[t._v("All variables related to VMware configuration are described in the table below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Variable")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("File")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter_hostname")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IP or hostname of the vCenter appliance. For example, "),a("code",[t._v("vcentergen10.am2.cloudra.local")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter_username")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Username to log in to the vCenter appliance. It might include a domain, for example, '"),a("code",[t._v("Administrator@vsphere.local")]),t._v("'")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vault_vcenter_password")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("group_vars/all/vault.yml")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for the "),a("code",[t._v("vcenter_username")]),t._v(" user, stored in the vault")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter_password")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Use the value of the "),a("code",[t._v("\\{\\{ vault_vcenter_password }}")]),t._v(" variable from the vault")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vcenter_cluster")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Name of your SimpliVity Cluster as defined in vCenter. For example "),a("code",[t._v("Rancher")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vm_dvswitch")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Distributed Virtual Switch containing "),a("code",[t._v("vm_portgroup")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("vm_portgroup")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Portgroup that the VMs connect to")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datacenter")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Name of the datacenter where the environment will be provisioned. For example, "),a("code",[t._v("DEVOPS")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datastore")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The datastore for storing VMs. For example, "),a("code",[t._v("Rancher_HPE")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("datastore_size")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group_vars/all/vars.yml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Size in GiB of the above datastore")])])])]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" The "),a("code",[t._v("vcenter_password")]),t._v(" variable de-references the "),a("code",[t._v("vault_vcenter_password")]),t._v(" which is stored in the vault.")]),t._v(" "),a("p",[t._v("For more information on datastore configuration, see the section "),a("a",{attrs:{href:"simplivity-config"}},[t._v("SimpliVity Configuration")]),t._v(".")])])}),[],!1,null,null,null);e.default=v.exports}}]);